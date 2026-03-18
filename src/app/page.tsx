import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import About from "@/components/About";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <About />
        <Services />
        <TrackRecord />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
