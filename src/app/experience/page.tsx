import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ExperienceContent from "@/components/ExperienceContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Recent Experience — YG Consulting",
  description:
    "Selected highlights from Yvonne Gan's career building and scaling luxury brands across Asia Pacific — Save The Duck, Canada Goose, Giuseppe Zanotti, Bailian Group, Ferragamo.",
  alternates: {
    canonical: "https://yganconsulting.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <ExperienceContent />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
