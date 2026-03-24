import { CONTACT_EMAIL } from "./constants";
import { getTranslations } from "./translations";
import type { ExpertisePage } from "./expertise-data";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YG Consulting",
    url: "https://yganconsulting.com",
    logo: "https://yganconsulting.com/favicon.svg",
    description:
      "Strategic consulting for luxury and lifestyle brands entering or expanding across China, Hong Kong, and the Asia-Pacific region.",
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "customer service",
      availableLanguage: ["English", "Chinese", "Cantonese"],
    },
    founder: {
      "@type": "Person",
      name: "Yvonne Gan",
    },
    areaServed: [
      "China",
      "Hong Kong",
      "South Korea",
      "Japan",
      "Singapore",
      "Malaysia",
      "Thailand",
      "Indonesia",
      "Taiwan",
      "Macau",
      "Australia",
    ],
    knowsAbout: [
      "Luxury Retail",
      "Brand Expansion",
      "Asia Pacific Market Entry",
      "Retail Operations",
      "Visual Merchandising",
    ],
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yvonne Gan",
    jobTitle: "Luxury Retail Consultant",
    description:
      "Independent luxury retail consultant with 25+ years of C-suite experience across Asia Pacific. Former President at Giuseppe Zanotti, VP at Canada Goose, Regional Executive Director at Ferragamo.",
    worksFor: {
      "@type": "Organization",
      name: "YG Consulting",
      url: "https://yganconsulting.com",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "York University",
      address: "Ontario, Canada",
    },
    knowsLanguage: ["English", "Cantonese", "Mandarin", "French"],
    knowsAbout: [
      "Luxury Retail Strategy",
      "Brand Expansion in Asia",
      "Retail Operations",
      "P&L Management",
      "Visual Merchandising",
      "Market Entry Strategy",
      "Franchise & Wholesale Distribution",
    ],
    url: "https://yganconsulting.com",
  };
}

export function generateProfessionalServiceSchema(page: {
  meta: { title: string; description: string };
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: page.meta.title.replace(" | YG Consulting", ""),
    provider: {
      "@type": "Organization",
      name: "YG Consulting",
      url: "https://yganconsulting.com",
    },
    url: `https://yganconsulting.com/expertise/${page.slug}`,
    description: page.meta.description,
    areaServed: [
      "China",
      "Hong Kong",
      "South Korea",
      "Japan",
      "Singapore",
      "Australia",
      "Taiwan",
      "Macau",
    ],
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateFAQSchemaFromPage(page: ExpertisePage) {
  const en = getTranslations("en");
  const faqs = page.faqs.map((faq) => ({
    question: en[faq.questionKey as keyof typeof en] as string,
    answer: en[faq.answerKey as keyof typeof en] as string,
  }));
  return generateFAQSchema(faqs);
}
