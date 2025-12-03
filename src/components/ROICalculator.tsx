import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [timesPerDay, setTimesPerDay] = useState<string>("5");
  const [timePerTask, setTimePerTask] = useState<string>("30");
  const [hourlyRate, setHourlyRate] = useState<string>("50");
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const frequency = parseFloat(timesPerDay) || 0;
    const minutes = parseFloat(timePerTask) || 0;
    
    const hoursPerTask = minutes / 60;
    const costPerTask = hoursPerTask * rate;
    const dailyCost = costPerTask * frequency;
    const monthlyCost = dailyCost * 21.67; // Average working days per month
    const annualCost = monthlyCost * 12;

    // Time calculations
    const dailyHours = hoursPerTask * frequency;
    const monthlyHours = dailyHours * 21.67;
    const annualHours = monthlyHours * 12;

    // Automation cost is 50% of monthly cost
    const automationCost = monthlyCost * 0.5;
    
    // Assuming 50% automation efficiency for both time and cost
    const monthlySavingsBeforeCost = monthlyCost * 0.5;
    const annualSavingsBeforeCost = annualCost * 0.5;
    
    // Net savings after amortizing automation cost over 12 months
    const monthlySavings = monthlySavingsBeforeCost - (automationCost / 12);
    const annualSavings = annualSavingsBeforeCost - automationCost;

    // Time saved (50% of total time)
    const monthlyTimeSaved = monthlyHours * 0.5;
    const annualTimeSaved = annualHours * 0.5;

    return {
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      monthlyTimeSaved: monthlyTimeSaved.toFixed(1),
      annualTimeSaved: annualTimeSaved.toFixed(0),
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
            Calculate savings by automating a single repetitive task
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="taskDescription">Task Description (Optional)</Label>
              <Input
                id="taskDescription"
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="e.g., Data entry from emails to spreadsheet"
                className="bg-secondary/50"
              />
              <p className="text-xs text-muted-foreground">Help us understand your automation needs better</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="timesPerDay">Task Frequency (per day)</Label>
                <Input
                  id="timesPerDay"
                  type="number"
                  value={timesPerDay}
                  onChange={(e) => {
                    setTimesPerDay(e.target.value);
                    setShowResults(false);
                  }}
                  placeholder="5"
                  className="bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timePerTask">Time per Task (minutes)</Label>
                <Input
                  id="timePerTask"
                  type="number"
                  value={timePerTask}
                  onChange={(e) => {
                    setTimePerTask(e.target.value);
                    setShowResults(false);
                  }}
                  placeholder="30"
                  className="bg-secondary/50"
                />
              </div>
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
            <div className="space-y-4 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardDescription>Net Monthly Savings</CardDescription>
                    <CardTitle className="text-4xl font-bold text-primary">
                      ${results.monthlySavings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      After automation costs
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardDescription>Net Annual Savings</CardDescription>
                    <CardTitle className="text-4xl font-bold text-primary">
                      ${results.annualSavings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      First year savings included
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-secondary/50">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardDescription className="text-xs">Monthly Time Saved</CardDescription>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {results.monthlyTimeSaved} hrs
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="bg-secondary/30 border-secondary/50">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardDescription className="text-xs">Annual Time Saved</CardDescription>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {results.annualTimeSaved} hrs
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>

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
