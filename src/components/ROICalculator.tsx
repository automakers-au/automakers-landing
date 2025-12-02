import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [timesPerWeek, setTimesPerWeek] = useState<string>("10");
  const [timePerTask, setTimePerTask] = useState<string>("30");
  const [hourlyRate, setHourlyRate] = useState<string>("50");
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const frequency = parseFloat(timesPerWeek) || 0;
    const minutes = parseFloat(timePerTask) || 0;
    
    const hoursPerTask = minutes / 60;
    const costPerTask = hoursPerTask * rate;
    const weeklyCost = costPerTask * frequency;
    const monthlyCost = weeklyCost * 4.33;
    const annualCost = monthlyCost * 12;

    // Assuming 70% automation efficiency
    const annualSavings = annualCost * 0.7;
    const monthlySavings = annualSavings / 12;
    
    // Installation cost is 50% of annual cost
    const installationCost = annualCost * 0.5;

    return {
      monthlyCost: monthlyCost.toFixed(0),
      annualCost: annualCost.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      installationCost: installationCost.toFixed(0),
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
                <Label htmlFor="timesPerWeek">Task Frequency (per week)</Label>
                <Input
                  id="timesPerWeek"
                  type="number"
                  value={timesPerWeek}
                  onChange={(e) => {
                    setTimesPerWeek(e.target.value);
                    setShowResults(false);
                  }}
                  placeholder="10"
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
                <Card className="bg-secondary/50 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardDescription>Current Annual Cost</CardDescription>
                    <CardTitle className="text-4xl font-bold text-foreground">
                      ${results.annualCost}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Monthly: ${results.monthlyCost}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardDescription>Installation Investment</CardDescription>
                    <CardTitle className="text-4xl font-bold text-foreground">
                      ${results.installationCost}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      One-time setup cost
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardDescription>Monthly Savings</CardDescription>
                    <CardTitle className="text-4xl font-bold text-primary">
                      ${results.monthlySavings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      After automation
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardDescription>Annual Savings</CardDescription>
                    <CardTitle className="text-4xl font-bold text-primary">
                      ${results.annualSavings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      ROI in {(parseFloat(results.installationCost) / parseFloat(results.annualSavings) * 12).toFixed(1)} months
                    </p>
                  </CardContent>
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
