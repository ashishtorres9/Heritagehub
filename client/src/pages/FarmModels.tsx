import Navigation from "@/components/Navigation";
import FarmModelCalculator from "@/components/FarmModelCalculator";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const models = [
  {
    anna: "4",
    setupCost: 44500,
    features: [
      "600-800 kg annual yield",
      "NPR 90k-120k annual profit (Self)",
      "NPR 72k-96k annual profit (Managed)",
      "Bamboo-based structure",
      "Setup support included",
    ],
  },
  {
    anna: "5",
    setupCost: 55000,
    features: [
      "750-1,000 kg annual yield",
      "NPR 110k-150k annual profit (Self)",
      "NPR 88k-120k annual profit (Managed)",
      "Bamboo-based structure",
      "Setup support included",
      "Most popular choice",
    ],
    popular: true,
  },
  {
    anna: "6",
    setupCost: 65000,
    features: [
      "900-1,200 kg annual yield",
      "NPR 130k-170k annual profit (Self)",
      "NPR 104k-136k annual profit (Managed)",
      "Bamboo-based structure",
      "Setup support included",
      "Maximum capacity",
    ],
  },
];

export default function FarmModels() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Farm Model Options
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect size for your land and investment capacity. All models use sustainable bamboo structures with guaranteed yields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {models.map((model) => (
              <Card
                key={model.anna}
                className={`p-8 relative ${
                  model.popular ? "border-2 border-destructive" : ""
                }`}
                data-testid={`card-model-${model.anna}-anna`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">
                    {model.anna} Anna
                  </div>
                  <div className="text-2xl font-semibold text-foreground">
                    NPR {model.setupCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Setup Cost</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    className="w-full bg-primary text-primary-foreground hover-elevate active-elevate-2"
                    data-testid={`button-inquire-${model.anna}-anna`}
                  >
                    Inquire Now
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FarmModelCalculator />
      <TrustBadges />
      <Footer />
    </div>
  );
}
