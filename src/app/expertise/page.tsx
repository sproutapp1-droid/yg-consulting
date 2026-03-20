import type { Metadata } from "next";
import { EXPERTISE_HUB_META } from "@/lib/expertise-data";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ExpertiseHub from "@/components/ExpertiseHub";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: EXPERTISE_HUB_META.title,
  description: EXPERTISE_HUB_META.description,
};

export default function ExpertisePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <ExpertiseHub />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
