import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

type AnnaSize = "4" | "5" | "6";
type ManagementType = "self" | "managed";

const farmData = {
  "4": {
    setupCost: 44500,
    self: { minProfit: 90000, maxProfit: 120000, minYield: 600, maxYield: 800 },
    managed: { minProfit: 72000, maxProfit: 96000, minYield: 600, maxYield: 800 },
  },
  "5": {
    setupCost: 55000,
    self: { minProfit: 110000, maxProfit: 150000, minYield: 750, maxYield: 1000 },
    managed: { minProfit: 88000, maxProfit: 120000, minYield: 750, maxYield: 1000 },
  },
  "6": {
    setupCost: 65000,
    self: { minProfit: 130000, maxProfit: 170000, minYield: 900, maxYield: 1200 },
    managed: { minProfit: 104000, maxProfit: 136000, minYield: 900, maxYield: 1200 },
  },
};

export default function FarmModelCalculator() {
  const [annaSize, setAnnaSize] = useState<AnnaSize>("5");
  const [managementType, setManagementType] = useState<ManagementType>("self");
  const [addTraining, setAddTraining] = useState(false);

  const currentData = farmData[annaSize][managementType];
  const setupCost = farmData[annaSize].setupCost + (addTraining ? 5000 : 0);

  return (
    <section className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Choose Your Farm Model
          </h2>
          <p className="text-lg text-muted-foreground">
            Customize your investment based on land size and management preference
          </p>
        </div>

        <Card className="p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Label className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-4 block">
                Land Size
              </Label>
              <RadioGroup
                value={annaSize}
                onValueChange={(value) => setAnnaSize(value as AnnaSize)}
              >
                {(["4", "5", "6"] as AnnaSize[]).map((size) => (
                  <div key={size} className="flex items-center gap-3 mb-3">
                    <RadioGroupItem
                      value={size}
                      id={`anna-${size}`}
                      className="h-5 w-5"
                      data-testid={`radio-anna-${size}`}
                    />
                    <Label
                      htmlFor={`anna-${size}`}
                      className="text-base font-medium cursor-pointer"
                    >
                      {size} Anna
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-4 block">
                Management Type
              </Label>
              <RadioGroup
                value={managementType}
                onValueChange={(value) =>
                  setManagementType(value as ManagementType)
                }
              >
                <div className="flex items-center gap-3 mb-3">
                  <RadioGroupItem
                    value="self"
                    id="self-managed"
                    className="h-5 w-5"
                    data-testid="radio-self-managed"
                  />
                  <Label
                    htmlFor="self-managed"
                    className="text-base font-medium cursor-pointer"
                  >
                    Self-Managed
                  </Label>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <RadioGroupItem
                    value="managed"
                    id="heritage-managed"
                    className="h-5 w-5"
                    data-testid="radio-heritage-managed"
                  />
                  <Label
                    htmlFor="heritage-managed"
                    className="text-base font-medium cursor-pointer"
                  >
                    Heritage Hub Managed
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="mb-8 pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <Checkbox
                id="training"
                checked={addTraining}
                onCheckedChange={(checked) => setAddTraining(checked as boolean)}
                data-testid="checkbox-training"
              />
              <Label
                htmlFor="training"
                className="text-base font-medium cursor-pointer"
              >
                Add Value-Added Training (+NPR 5,000)
              </Label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="p-6 bg-accent" data-testid="card-setup-cost">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Setup Cost
              </div>
              <div className="font-serif text-3xl font-semibold text-primary">
                NPR {setupCost.toLocaleString()}
              </div>
            </Card>

            <Card className="p-6 bg-accent" data-testid="card-annual-profit">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Annual Profit
              </div>
              <div className="font-serif text-3xl font-semibold text-primary">
                NPR {currentData.minProfit.toLocaleString()}–
                {currentData.maxProfit.toLocaleString()}
              </div>
            </Card>

            <Card className="p-6 bg-accent" data-testid="card-yield">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Annual Yield
              </div>
              <div className="font-serif text-3xl font-semibold text-primary">
                {currentData.minYield}–{currentData.maxYield} kg
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
}
