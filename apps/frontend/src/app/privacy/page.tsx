import { generateMetadata, siteConfig } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for GiLabs. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="relative bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-white/60 hover:text-white transition-colors mb-8 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/60">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed">
                At GiLabs, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when 
                you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information (name, email, phone number) when you reach out to us</li>
                <li>Usage data and analytics to improve our website experience</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Data Protection
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Your Rights
              </h2>
              <p className="leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Cookies
              </h2>
              <p className="leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can control 
                cookies through your browser settings. Note that disabling cookies may affect 
                website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Third-Party Services
              </h2>
              <p className="leading-relaxed">
                We may use third-party services that collect information used to identify you. 
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-display text-white mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy, please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-white hover:opacity-80 transition-opacity underline"
                >
                  {siteConfig.company.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

