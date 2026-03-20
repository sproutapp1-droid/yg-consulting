import type { Metadata } from "next";
import { getExpertiseBySlug } from "@/lib/expertise-data";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ExpertisePageLayout from "@/components/ExpertisePageLayout";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const page = getExpertiseBySlug("startup-business-asia")!;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function StartupBusinessAsiaPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <ExpertisePageLayout page={page} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
