import Bethepart from "@/components/Bethepart/Bethepart";
import Companies from "@/components/CompanyLogos/Companies";
import Faqs from "@/components/Faqs/Faqs";
import HeroSection from "@/components/Header/HeroSection";
import Pricing from "@/components/Pricing/Pricing";
import Footer from "@/components/Reusable/Footer";
import Navbar from "@/components/Reusable/Navbar";
import Unleashpower from "@/components/UnleashthePower/Unleashpower";
import Workflow from "@/components/Workflow/Workflow";
import Workflow2 from "@/components/Workflow/Workflow2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-0 -z-50 w-screen h-screen">
        <div className="w-full">
          <Image
            src="/images/bghero.png"
            alt="hero"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <Companies />
      <Workflow2 />
      <Workflow />
      <Unleashpower />
      <Pricing />
      <Faqs />
      <Bethepart />
      <Footer/>
    </div>
  );
}
