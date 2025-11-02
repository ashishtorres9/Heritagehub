import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import FarmModelCalculator from "@/components/FarmModelCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustBadges />
      <FarmModelCalculator />
      <Footer />
    </div>
  );
}
