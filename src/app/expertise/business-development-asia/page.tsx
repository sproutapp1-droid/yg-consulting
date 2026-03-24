import type { Metadata } from "next";
import { getExpertiseBySlug } from "@/lib/expertise-data";
import { generateProfessionalServiceSchema, generateFAQSchemaFromPage } from "@/lib/structured-data";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ExpertisePageLayout from "@/components/ExpertisePageLayout";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const page = getExpertiseBySlug("business-development-asia")!;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: {
    canonical: `https://yganconsulting.com/expertise/${page.slug}`,
  },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: `https://yganconsulting.com/expertise/${page.slug}`,
    type: "article",
  },
};

export default function BusinessDevelopmentAsiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProfessionalServiceSchema(page)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchemaFromPage(page)),
        }}
      />
      <AnnouncementBar />
      <Header />
      <main id="main">
        <ExpertisePageLayout page={page} />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
