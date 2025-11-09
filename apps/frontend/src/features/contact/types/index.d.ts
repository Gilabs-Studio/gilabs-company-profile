export interface ContactInfo {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon?: string;
}

export interface ContactFormField {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "tel";
  placeholder: string;
  required: boolean;
}

export interface ContactPageData {
  hero: {
    headline: string;
    subtext: string;
  };
  contactInfo: ContactInfo[];
  form: {
    fields: ContactFormField[];
    submitLabel: string;
    successMessage: string;
  };
  socialLinks?: {
    label: string;
    href: string;
    icon?: string;
  }[];
}

