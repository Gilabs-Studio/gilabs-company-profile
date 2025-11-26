"use client";

import { useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { contactData } from "../data/contact";
import { cn } from "@/lib/utils";

export function ContactOverview() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "github":
        return <Github className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({});

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-8">
        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight font-display mb-6 sm:mb-8">
            {contactData.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/80 whitespace-pre-line">
            {contactData.hero.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-8xl">
          {/* Left: Contact Information */}
          <div className="space-y-2 sm:space-y-3">
            {contactData.contactInfo.map((info) => (
              <div
                key={info.id}
                className="border-l-2 border-white/20 pl-6 py-4"
              >
                {info.href ? (
                  <a href={info.href} className="block no-underline">
                    <div className="text-xs sm:text-sm font-mono text-white/40 mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-normal text-white/70">
                      {info.value}
                    </div>
                  </a>
                ) : (
                  <div>
                    <div className="text-xs sm:text-sm font-mono text-white/40 mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-normal text-white/70">
                      {info.value}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Social Links */}
            {contactData.socialLinks && contactData.socialLinks.length > 0 && (
              <div className="border-l-2 border-white/20 pl-6 py-4 mt-8">
                <div className="text-xs sm:text-sm font-mono text-white/40 mb-3 uppercase tracking-wider">
                  Follow
                </div>
                <div className="space-y-2">
                  {contactData.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base text-white/60"
                    >
                      {getSocialIcon(social.label)}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactData.form.fields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs sm:text-sm font-mono text-white/40 mb-2 uppercase tracking-wider"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-white/30 ml-1">*</span>
                    )}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      rows={6}
                      className={cn(
                        "w-full px-4 py-3 bg-white/5 border border-white/10",
                        "text-white placeholder:text-white/30",
                        "focus:outline-none focus:border-white/30",
                        "transition-all duration-200 resize-none"
                      )}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full px-4 py-3 bg-white/5 border border-white/10",
                        "text-white placeholder:text-white/30",
                        "focus:outline-none focus:border-white/30",
                        "transition-all duration-200"
                      )}
                    />
                  )}
                </div>
              ))}

              {isSubmitted && (
                <div className="px-4 py-3 bg-white/5 border border-white/10 text-sm text-white/80">
                  {contactData.form.successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "w-full px-4 py-3 border border-white/20 text-white text-sm sm:text-base font-normal",
                  "hover:border-white hover:bg-white hover:text-black",
                  "disabled:opacity-30 disabled:cursor-not-allowed",
                  "transition-all duration-200"
                )}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSubmitted
                    ? "Sent!"
                    : contactData.form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

