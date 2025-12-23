import React from "react";
import { ROICalculator } from "@/components/ROICalculator";

const CalculatorSection: React.FC = () => {
  return (
    <section id="calculator" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">Calculate Your Savings</h2>
          <p className="text-base sm:text-xl text-muted-foreground">See how much AI automation could save your business</p>
        </div>

        <ROICalculator />
      </div>
    </section>
  );
};

export default CalculatorSection;
