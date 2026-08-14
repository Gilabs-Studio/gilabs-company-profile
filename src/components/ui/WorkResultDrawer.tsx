"use client"

import { useEffect, useState, useRef, useMemo } from 'react';
import type { WorkResultProject } from '../../data/workResults';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from './drawer';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface WorkResultDrawerProps {
  lang?: string;
}

// Drawer Image component with instant micro-thumbnail preview layer & smooth high-res cross-fade
const DrawerImage = ({ src, alt, onError }: { src: string; alt: string; onError: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const thumbSrc = useMemo(() => src.replace(/\/([^\/]+)$/, '/thumb/$1'), [src]);

  useEffect(() => {
    setIsLoaded(false);
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* 1. Ultra low-res micro WebP thumbnail (~300B) rendered INSTANTLY with blur filter */}
      <img
        src={encodeURI(thumbSrc)}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-contain filter blur-md scale-105 transition-opacity duration-300 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Full high-resolution image layer with smooth 300ms cross-fade */}
      <img
        ref={imgRef}
        loading="eager"
        decoding="async"
        src={encodeURI(src)}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={onError}
        className={`relative z-10 w-full h-full object-contain transition-opacity duration-300 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const WorkResultDrawer = ({ lang = 'en' }: WorkResultDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<WorkResultProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDismissible, setIsDismissible] = useState(true);

  useEffect(() => {
    const checkDismissible = () => {
      setIsDismissible(window.innerWidth >= 768);
    };
    checkDismissible();
    window.addEventListener('resize', checkDismissible);
    return () => window.removeEventListener('resize', checkDismissible);
  }, []);

  const labels = {
    en: {
      close: 'Close',
      technologies: 'Technologies Used',
      features: 'Key Features',
      overview: 'Project Overview',
      back: 'Back',
      viewLive: 'View Live Project',
    },
    id: {
      close: 'Tutup',
      technologies: 'Teknologi yang Digunakan',
      features: 'Fitur Utama',
      overview: 'Gambaran Proyek',
      back: 'Kembali',
      viewLive: 'Lihat Proyek Live',
    },
  };

  const t = labels[lang as keyof typeof labels] || labels.en;

  useEffect(() => {
    const handleOpenDrawer = (e: CustomEvent<WorkResultProject>) => {
      setProject(e.detail);
      setIsOpen(true);
      setCurrentImageIndex(0);
      
      // Pause Lenis smooth scroll when drawer opens to prevent scroll conflicts
      const lenisInstance = (globalThis as any).lenis;
      if (lenisInstance) {
        lenisInstance.stop();
      }
    };

    const handleCloseDrawer = () => {
      // Resume Lenis smooth scroll when drawer closes
      const lenisInstance = (globalThis as any).lenis;
      if (lenisInstance) {
        lenisInstance.start();
      }
    };

    globalThis.addEventListener('open-work-result-drawer', handleOpenDrawer as EventListener);
    
    // Listen for drawer close
    const drawerElement = document.querySelector('[data-vaul-drawer]') as HTMLElement;
    if (drawerElement) {
      const observer = new MutationObserver(() => {
        const isCurrentlyOpen = drawerElement.dataset.state === 'open';
        if (!isCurrentlyOpen) {
          handleCloseDrawer();
        }
      });
      observer.observe(drawerElement, { attributes: true, attributeFilter: ['data-state'] });
    }

    return () => {
      globalThis.removeEventListener('open-work-result-drawer', handleOpenDrawer as EventListener);
      handleCloseDrawer(); // Ensure Lenis is resumed on cleanup
    };
  }, []);

  // Reset image index when drawer closes and handle Lenis
  useEffect(() => {
    if (isOpen) {
      // Pause Lenis smooth scroll when drawer opens
      const lenisInstance = (globalThis as any).lenis;
      if (lenisInstance) {
        lenisInstance.stop();
      }
      // Pre-load all project micro WebP thumbnails (~300B) for 0ms instant slider switching
      if (project?.image) {
        project.image.forEach((imgObj) => {
          if (imgObj.image) {
            const thumbUrl = imgObj.image.replace(/\/([^\/]+)$/, '/thumb/$1');
            const img = new Image();
            img.src = encodeURI(thumbUrl);
          }
        });
      }
    } else {
      setCurrentImageIndex(0);
      // Resume Lenis smooth scroll when drawer closes
      const lenisInstance = (globalThis as any).lenis;
      if (lenisInstance) {
        lenisInstance.start();
      }
    }
  }, [isOpen, project]);

  const images = project?.image || [];
  const currentImage = images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation(); // Prevent the drawer from catching swipe events meant for the slider
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
    
    // Reset touch coordinates
    setTouchStart(0);
    setTouchEnd(0);
  };

  const [imageError, setImageError] = useState(false);

  const getTypeLabel = () => {
    if (project?.type !== 'real') return 'Demo';
    return lang === 'en' ? 'Production' : 'Produksi';
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right" dismissible={isDismissible}>
      <DrawerContent className="max-w-3xl h-[100dvh] flex flex-col overflow-hidden">
        {project && (
          <div 
            ref={scrollContainerRef}
            data-vaul-no-drag
            className="flex-1 overflow-y-auto flex flex-col"
            style={{
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch',
            }}
            onTouchStart={(e) => {
              // Only stop propagation if we are touching a part that should be scrollable
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
            onWheel={(e) => {
              e.stopPropagation();
            }}
          >
              <DrawerHeader 
                data-vaul-no-drag
                className="shrink-0 border-b border-border/50 relative md:sticky top-0 bg-background/80 backdrop-blur-md z-20 px-6 py-4"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    {/* Sticky Back Button for Mobile */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand transition-colors cursor-pointer group"
                    >
                      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                      <span>{t.back}</span>
                    </button>
                  </div>

                  <div className="flex-1 text-left">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full mb-2">
                      {getTypeLabel()}
                    </span>
                    <DrawerTitle className="text-xl md:text-2xl">{project.title}</DrawerTitle>
                    <DrawerDescription className="mt-2 text-sm md:text-base">
                      {project.description}
                    </DrawerDescription>
                  </div>
                </div>
              </DrawerHeader>

              <div className="px-6 py-6 min-h-0">
              {/* Image Slider */}
              {images.length > 0 && (
                <div className="relative mb-6">
                  <div
                    ref={sliderRef}
                    data-vaul-no-drag
                    className="relative aspect-video rounded-xl overflow-hidden bg-secondary/20 flex items-center justify-center"
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      handleTouchStart(e);
                    }}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {currentImage && (
                      <>
                        {currentImage.image && !imageError ? (
                          <DrawerImage
                            src={currentImage.image}
                            alt={currentImage.title || project.title}
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <div className="w-full h-full bg-linear-to-br from-brand/20 via-brand/10 to-secondary/20 flex items-center justify-center">
                            <div className="text-center p-8">
                              <svg
                                className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {project && <p className="text-sm text-muted-foreground/70">{project.title}</p>}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors shadow-lg z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors shadow-lg z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground z-10">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    )}
                  </div>

                  {/* Dots Indicator */}
                  {images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {images.map((img, index) => (
                        <button
                          key={`${img.title || 'image'}-${index}-${img.image}`}
                          onClick={() => goToImage(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'w-8 bg-brand'
                              : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image Title */}
                  {currentImage?.title && currentImage.title !== 'banner' && (
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      {currentImage.title}
                    </p>
                  )}
                </div>
              )}

              {project.features && project.features.sections.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">{t.features}</h3>
                  <div className="space-y-4">
                    {project.features.sections.map((section) => (
                      <div key={section.title} className="bg-secondary/20 rounded-xl p-5">
                        <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-bold mt-0.5">
                                ✓
                              </span>
                              <span className="text-muted-foreground text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">{t.technologies}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary/50 text-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && project.liveUrl !== '#' && (
                <div className="mt-8 mb-8">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-bold text-white bg-brand rounded-full hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 transition-all duration-200"
                  >
                    {t.viewLive}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default WorkResultDrawer;
