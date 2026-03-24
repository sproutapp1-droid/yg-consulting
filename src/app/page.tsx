import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import About from "@/components/About";
import Services from "@/components/Services";
import InlineCTA from "@/components/InlineCTA";
import TrackRecord from "@/components/TrackRecord";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollCTA from "@/components/ScrollCTA";
import { generatePersonSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <About />
        <Services />
        <InlineCTA variant="social-proof" />
        <TrackRecord />
        <InlineCTA variant="value-prop" />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollCTA />
    </>
  );
}
