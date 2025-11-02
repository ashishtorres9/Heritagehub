import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Bamboo_grove_mushroom_farm_hero_33b0ecb3.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,60,40,0.85)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16">
        <div className="text-white/80 text-sm sm:text-base mb-4 uppercase tracking-wide">
          Heritage Hub Nepal — Sustainable Ventures Across Nepal
        </div>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          data-testid="text-hero-headline"
        >
          Turn Your 5 Anna Into NPR 120,000/Year
        </h1>
        <p
          className="text-lg sm:text-xl text-white/90 mb-2 max-w-2xl mx-auto leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          Bamboo-powered mushroom farms • Managed or DIY • Guaranteed yield
        </p>
        <p className="text-sm text-white/70 mb-8">
          Starting with mushroom farming — our first sustainable success story
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/farm-models">
            <Button
              size="lg"
              className="bg-destructive text-destructive-foreground backdrop-blur-md shadow-lg px-8 hover-elevate active-elevate-2"
              data-testid="button-view-models"
            >
              View Farm Models
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/50 text-primary border-primary backdrop-blur-md shadow-lg px-8 hover-elevate active-elevate-2"
              data-testid="button-free-assessment"
            >
              Get Free Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
