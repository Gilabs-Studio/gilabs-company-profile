import { ContactPageData } from "../types";

export const contactData: ContactPageData = {
  hero: {
    headline: "Let's Build Something Together.",
    subtext:
      "Have a project in mind? Want to discuss your ideas? We're here to help turn your vision into reality.",
  },
  contactInfo: [
    {
      id: "email",
      label: "Email",
      value: "hello@gilabs.com",
      href: "mailto:hello@gilabs.com",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+62 812-3741-1352",
      href: "tel:+6281237411352",
    },
    {
      id: "address",
      label: "Address",
      value: "Semarang, Indonesia",
    },
    {
      id: "hours",
      label: "Working Hours",
      value: "Mon - Fri, 9:00 AM - 6:00 PM WIB",
    },
  ],
  form: {
    fields: [
      {
        id: "name",
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true,
      },
      {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "your.email@example.com",
        required: true,
      },
      {
        id: "phone",
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+62 812-3456-7890",
        required: false,
      },
      {
        id: "message",
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell us about your project...",
        required: true,
      },
    ],
    submitLabel: "Send Message",
    successMessage: "Thank you! We'll get back to you soon.",
  },
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/gilabs",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/gilabs",
    },
    {
      label: "GitHub",
      href: "https://github.com/gilabs",
    },
  ],
};

