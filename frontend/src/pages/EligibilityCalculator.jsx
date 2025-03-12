import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EligibilityCalculator = () => {
  const [income, setIncome] = useState(50000);
  const [tenure, setTenure] = useState(20);
  const [interest, setInterest] = useState(6.5);

  const maxLoanEligibility = income * 60; // Basic estimation
  const interestPayable = (maxLoanEligibility * interest * tenure) / 100;
  const totalPayable = maxLoanEligibility + interestPayable;

  const data = [
    { name: "Principal Amount", value: maxLoanEligibility, color: "#FF6B6B" },
    { name: "Interest Payable", value: interestPayable, color: "#3B82F6" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Home Loan Eligibility Calculator</h2>
      <p className="text-gray-600 mt-2">Calculate your home loan eligibility based on your income.</p>

      <Card className="p-4 mt-6">
        <div>
          <label>Monthly Income: ₹{income.toLocaleString()}</label>
          <Slider
            min={20000}
            max={200000}
            step={5000}
            value={[income]}
            onValueChange={(val) => setIncome(val[0])}
          />
        </div>

        <div className="mt-4">
          <label>Loan Tenure: {tenure} Years</label>
          <Slider
            min={5}
            max={30}
            step={1}
            value={[tenure]}
            onValueChange={(val) => setTenure(val[0])}
          />
        </div>

        <div className="mt-4">
          <label>Rate of Interest: {interest}%</label>
          <Slider
            min={6}
            max={15}
            step={0.1}
            value={[interest]}
            onValueChange={(val) => setInterest(val[0])}
          />
        </div>
      </Card>

      <Card className="p-6 mt-6 text-center">
        <h3 className="text-xl font-semibold">Eligible Loan Amount</h3>
        <p className="text-3xl font-bold text-blue-600">₹{maxLoanEligibility.toLocaleString()}</p>
      </Card>

      <Card className="p-6 mt-6 flex flex-col items-center">
        <h3 className="text-xl font-semibold">Payment Breakdown</h3>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="mt-4">Total Payable: ₹{totalPayable.toLocaleString()}</p>
      </Card>

      <Button className="mt-6 w-full bg-blue-600">View Loan Details</Button>
    </div>
  );
};

export default EligibilityCalculator;
