import Header from "@/components/shared/header/Header";
import HeroSection from "@/components/landing/hero_section/HeroSection";
import PropertyTypes from "@/components/landing/property_type/PropertyTypes";
import SampleOMs from "@/components/landing/sample_oms/SampleOMs";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <PropertyTypes />
      <SampleOMs />
    </>
  );
}
