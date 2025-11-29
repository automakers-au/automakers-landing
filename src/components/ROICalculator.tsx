import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [hourlyRate, setHourlyRate] = useState<string>("50");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("20");
  const [efficiency, setEfficiency] = useState<string>("70");
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const hours = parseFloat(hoursPerWeek) || 0;
    const effPercent = parseFloat(efficiency) || 0;

    const weeklyManualCost = rate * hours;
    const monthlyCost = weeklyManualCost * 4.33;
    const annualCost = monthlyCost * 12;

    const monthlySavings = monthlyCost * (effPercent / 100);
    const annualSavings = annualCost * (effPercent / 100);

    return {
      monthlyCost: monthlyCost.toFixed(0),
      annualCost: annualCost.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
    };
  };

  const results = calculateSavings();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            ROI Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Discover how much you could save with AI automation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input
                id="hourlyRate"
                type="number"
                value={hourlyRate}
                onChange={(e) => {
                  setHourlyRate(e.target.value);
                  setShowResults(false);
                }}
                placeholder="50"
                className="bg-secondary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hoursPerWeek">Hours per Week</Label>
              <Input
                id="hoursPerWeek"
                type="number"
                value={hoursPerWeek}
                onChange={(e) => {
                  setHoursPerWeek(e.target.value);
                  setShowResults(false);
                }}
                placeholder="20"
                className="bg-secondary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="efficiency">Automation Efficiency (%)</Label>
              <Input
                id="efficiency"
                type="number"
                value={efficiency}
                onChange={(e) => {
                  setEfficiency(e.target.value);
                  setShowResults(false);
                }}
                placeholder="70"
                max="100"
                className="bg-secondary/50"
              />
            </div>
          </div>

          <Button
            onClick={() => setShowResults(true)}
            className="w-full text-lg py-6 animate-glow"
            size="lg"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Calculate Your Savings
          </Button>

          {showResults && (
            <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up">
              <Card className="bg-secondary/50 border-primary/20">
                <CardHeader className="pb-3">
                  <CardDescription>Monthly Savings</CardDescription>
                  <CardTitle className="text-4xl font-bold text-primary">
                    ${results.monthlySavings}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Current monthly cost: ${results.monthlyCost}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-primary/20">
                <CardHeader className="pb-3">
                  <CardDescription>Annual Savings</CardDescription>
                  <CardTitle className="text-4xl font-bold text-primary">
                    ${results.annualSavings}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Current annual cost: ${results.annualCost}
                  </p>
                </CardContent>
              </Card>

              <div className="md:col-span-2">
                <Button asChild className="w-full text-lg py-6" size="lg">
                  <a href="https://tally.so/r/wzparq" target="_blank" rel="noopener noreferrer">
                    Get Started - Book Your Consultation
                  </a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
