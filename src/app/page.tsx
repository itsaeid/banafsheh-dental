import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/hero/Hero";
import AboutSection from "@/components/home/aboutsection/AboutSection";
import ServicesSection from "@/components/home/services/ServicesSection";


export default function Home() {
  return (
    <div className="h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
