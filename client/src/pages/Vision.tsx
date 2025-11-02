import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const phases = [
  {
    phase: "Phase 1",
    status: "active",
    year: "2025",
    title: "Mushroom Farming",
    description: "Sustainable bamboo-powered mushroom cultivation with proven ROI and community impact.",
    highlights: [
      "NPR 120k-220k annual returns per setup",
      "Guaranteed 50% refund on underperformance",
      "86% untapped market opportunity",
      "30+ year bamboo infrastructure lifespan",
    ],
    icon: CheckCircle2,
    color: "text-primary",
  },
  {
    phase: "Phase 2",
    status: "planned",
    year: "2026",
    title: "Bamboo Products Manufacturing",
    description: "Value-added bamboo processing for furniture, construction materials, and handicrafts leveraging our mushroom farming infrastructure.",
    highlights: [
      "Utilize existing bamboo resources",
      "Export-quality furniture and materials",
      "Local artisan employment programs",
      "Sustainable construction solutions",
    ],
    icon: Clock,
    color: "text-muted-foreground",
  },
  {
    phase: "Phase 3",
    status: "planned",
    year: "2027",
    title: "Value-Added Food Processing",
    description: "Mushroom-based products, packaging, and distribution network expanding our agricultural value chain.",
    highlights: [
      "Dried mushroom products",
      "Mushroom powder and supplements",
      "Packaged ready-to-cook products",
      "Direct-to-consumer distribution",
    ],
    icon: Clock,
    color: "text-muted-foreground",
  },
  {
    phase: "Future Ventures",
    status: "exploration",
    year: "2028+",
    title: "Diversified Portfolio",
    description: "Expanding into educational programs, cultural activities, retail operations, and other sustainable ventures as registered in our company objectives.",
    highlights: [
      "Agricultural education & training",
      "Cultural heritage preservation",
      "Sustainable retail operations",
      "Music publishing & creative arts",
    ],
    icon: Lightbulb,
    color: "text-muted-foreground",
  },
];

export default function Vision() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Vision & Roadmap
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Heritage Hub Nepal is building a diversified portfolio of sustainable ventures. Starting with mushroom farming, we're creating a blueprint for profitable, eco-friendly businesses across Nepal.
            </p>
          </div>

          <div className="mb-16">
            <Card className="p-8 bg-card border-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  Current Focus
                </Badge>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Mushroom Farming - Our Proof of Concept
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We're demonstrating that sustainable, high-yield agriculture can deliver strong returns while empowering local communities. This success will fund and inform all future ventures.
              </p>
              <Link href="/farm-models">
                <Button className="bg-primary text-primary-foreground hover-elevate active-elevate-2">
                  Explore Mushroom Farming
                </Button>
              </Link>
            </Card>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 ${
                    phase.status === "active"
                      ? "border-2 border-primary"
                      : ""
                  }`}
                  data-testid={`card-phase-${index + 1}`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Icon className={`h-16 w-16 ${phase.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge
                          variant={phase.status === "active" ? "default" : "secondary"}
                          className={phase.status === "active" ? "bg-primary text-primary-foreground" : ""}
                        >
                          {phase.status === "active" ? "Active" : phase.status === "planned" ? "Planned" : "Exploration"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {phase.year}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                        {phase.phase}: {phase.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {phase.description}
                      </p>

                      <ul className="space-y-2">
                        {phase.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-accent inline-block">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Join Us on This Journey
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Heritage Hub Nepal welcomes investors and partners who share our vision of sustainable, profitable ventures that benefit Nepal's communities and environment.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-destructive text-destructive-foreground hover-elevate active-elevate-2"
                >
                  Become a Partner
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
