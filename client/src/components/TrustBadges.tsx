import { Card } from "@/components/ui/card";
import { TrendingUp, TreePine, DollarSign, Users } from "lucide-react";

const badges = [
  {
    icon: TrendingUp,
    value: "1.24",
    label: "B/C Ratio",
    testId: "badge-bc-ratio",
  },
  {
    icon: TreePine,
    value: "30+",
    label: "Year Bamboo Life",
    testId: "badge-bamboo-life",
  },
  {
    icon: DollarSign,
    value: "NPR 200/kg",
    label: "Off-Season Price",
    testId: "badge-offseason-price",
  },
  {
    icon: Users,
    value: "Research",
    label: "Mina Gurung & Kamala Balami Models",
    testId: "badge-research",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <Card
                key={badge.label}
                className="p-6 text-center hover-elevate transition-transform hover:-translate-y-1"
                data-testid={badge.testId}
              >
                <Icon className="h-9 w-9 text-destructive mx-auto mb-3" />
                <div className="font-serif text-3xl font-semibold text-primary mb-1">
                  {badge.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {badge.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
