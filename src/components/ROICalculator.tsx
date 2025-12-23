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
    // Simplified Time Savings calculation per spec:
    // Total Savings = (Task Duration × Frequency) × Hourly Rate
    const rate = parseFloat(hourlyRate) || 0;
    const frequency = parseFloat(timesPerDay) || 0;
    const minutes = parseFloat(timePerTask) || 0;

    const hoursPerTask = minutes / 60;
    const dailySavings = hoursPerTask * frequency * rate; // daily monetary savings
    const monthlySavings = dailySavings * 21.67; // avg working days
    const annualSavings = monthlySavings * 12;

    const dailyHoursSaved = hoursPerTask * frequency;
    const monthlyHoursSaved = dailyHoursSaved * 21.67;
    const annualHoursSaved = monthlyHoursSaved * 12;

    return {
      dailySavings: dailySavings.toFixed(2),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      dailyHoursSaved: dailyHoursSaved.toFixed(2),
      monthlyHoursSaved: monthlyHoursSaved.toFixed(1),
      annualHoursSaved: annualHoursSaved.toFixed(0),
    };
  };

  const results = calculateSavings();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Time Savings Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Project projected monetary savings from automating a repetitive task
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
            className="w-full text-lg py-6 animate-glow text-white"
            size="lg"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">Calculate Time Savings</span>
            <span className="sm:hidden">Calculate</span>
          </Button>

          {showResults && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardDescription>Projected Daily Savings</CardDescription>
                    <CardTitle className="text-4xl font-bold text-primary">
                      ${results.dailySavings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Based on automated time recovered per day
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardDescription>Projected Annual Savings</CardDescription>
                    <CardTitle className="text-4xl font-bold text-primary">
                      ${results.annualSavings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Annual projection</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-secondary/50">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardDescription className="text-xs">Daily Time Saved</CardDescription>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {results.dailyHoursSaved} hrs
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="bg-secondary/30 border-secondary/50">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardDescription className="text-xs">Monthly Savings</CardDescription>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      ${results.monthlySavings}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <div className="md:col-span-2">
                <Button asChild className="w-full text-base sm:text-lg py-5 sm:py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white" size="lg">
                  <a href="https://form.typeform.com/to/Tw2sG6yF" target="_blank" rel="noopener noreferrer">
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
