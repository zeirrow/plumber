import AquaFlowTestimonials from "@/components/AquaFlowTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/EnhancedFooter";
import ExpertTeamComponent from "@/components/ExpertTeamComponent";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProfessionalServices from "@/components/Services";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Reliable Plumbing Services</title>
        <meta
          name="description"
          content="Top-notch plumbing services for your home or business. Fast, reliable and affordable."
        />
      </Head>

      <Header />
      <HeroSection />
      <ProfessionalServices />
      <ExpertTeamComponent />
      <AquaFlowTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}
