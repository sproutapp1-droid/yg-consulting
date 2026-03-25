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
    slogan: "Retail & Brand Strategy for Asia Pacific",
    sameAs: [
      "https://www.linkedin.com/in/yvonne-gan-92554138/",
    ],
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
      "Store Operations",
      "Fashion Retail",
      "Business Development",
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
    sameAs: [
      "https://www.linkedin.com/in/yvonne-gan-92554138/",
    ],
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
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "General Manager, Asia Pacific",
        occupationLocation: { "@type": "Country", name: "Hong Kong" },
        description: "Save The Duck — GM Asia Pacific / Consultant (2024–present)",
      },
      {
        "@type": "Occupation",
        name: "Vice President, Commercial & Wholesale, Asia Pacific",
        occupationLocation: { "@type": "Country", name: "Hong Kong" },
        description: "Canada Goose — VP Commercial & Wholesale, APAC (2022–2023)",
      },
      {
        "@type": "Occupation",
        name: "President, Asia Pacific",
        occupationLocation: { "@type": "Country", name: "Hong Kong" },
        description: "Giuseppe Zanotti — President, Asia Pacific including China (2021–2022)",
      },
      {
        "@type": "Occupation",
        name: "Deputy General Manager / CEO, The Balancing",
        occupationLocation: { "@type": "Country", name: "China" },
        description: "Shanghai Bailian Group — Deputy GM, CEO The Balancing (2018–2021)",
      },
      {
        "@type": "Occupation",
        name: "Regional Executive Director, Marketing & Merchandising",
        occupationLocation: { "@type": "Country", name: "Hong Kong" },
        description: "Salvatore Ferragamo — Regional Executive Director, APAC (2007–2017)",
      },
    ],
    knowsLanguage: ["English", "Cantonese", "Mandarin", "French"],
    knowsAbout: [
      "Luxury Retail Strategy",
      "Brand Expansion in Asia",
      "Retail Operations",
      "Store Operations",
      "P&L Management",
      "Visual Merchandising",
      "Market Entry Strategy",
      "Franchise & Wholesale Distribution",
      "Fashion Buying",
      "Business Development in Asia",
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
      "Malaysia",
      "Thailand",
      "Indonesia",
      "Australia",
      "Taiwan",
      "Macau",
    ],
  };
}

export function generateBreadcrumbSchema(pageName: string, pageSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yganconsulting.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Expertise",
        item: "https://yganconsulting.com/expertise",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageName,
        item: `https://yganconsulting.com/expertise/${pageSlug}`,
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "YG Consulting",
    url: "https://yganconsulting.com",
    description:
      "Strategic consulting for luxury and lifestyle brands entering or expanding across China, Hong Kong, and the Asia-Pacific region.",
    publisher: {
      "@type": "Organization",
      name: "YG Consulting",
    },
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
