"use client"

import { useEffect, useState } from 'react';
import type { WorkResultProject } from '../../data/workResults';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from './drawer';

interface WorkResultDrawerProps {
  lang?: string;
}

const WorkResultDrawer = ({ lang = 'en' }: WorkResultDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<WorkResultProject | null>(null);

  const labels = {
    en: {
      close: 'Close',
      technologies: 'Technologies Used',
      features: 'Key Features',
      overview: 'Project Overview',
    },
    id: {
      close: 'Tutup',
      technologies: 'Teknologi yang Digunakan',
      features: 'Fitur Utama',
      overview: 'Gambaran Proyek',
    },
  };

  const t = labels[lang as keyof typeof labels] || labels.en;

  useEffect(() => {
    const handleOpenDrawer = (e: CustomEvent<WorkResultProject>) => {
      setProject(e.detail);
      setIsOpen(true);
    };

    globalThis.addEventListener('open-work-result-drawer', handleOpenDrawer as EventListener);

    return () => {
      globalThis.removeEventListener('open-work-result-drawer', handleOpenDrawer as EventListener);
    };
  }, []);

  const bannerImage = project?.image.find(img => img.title === 'banner');
  const displayImage = bannerImage?.image || project?.image[0]?.image || '';
  const [imageError, setImageError] = useState(false);

  const getTypeLabel = () => {
    if (project?.type !== 'real') return 'Demo';
    return lang === 'en' ? 'Production' : 'Produksi';
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="max-w-3xl">
        {project && (
          <>
            <DrawerHeader>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full mb-2">
                    {getTypeLabel()}
                  </span>
                  <DrawerTitle>{project.title}</DrawerTitle>
                  <DrawerDescription className="mt-2">
                    {project.description}
                  </DrawerDescription>
                </div>
              </div>
            </DrawerHeader>

            <div className="overflow-y-auto px-6 pb-6">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-secondary/20">
                {displayImage && !imageError ? (
                  <img
                    src={displayImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
              </div>

              {project.features && project.features.sections.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">{t.features}</h3>
                  <div className="space-y-4">
                    {project.features.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="bg-secondary/20 rounded-xl p-5">
                        <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
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
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default WorkResultDrawer;
