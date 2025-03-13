import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const HomeLoanCalculator = () => {
    const [monthlyIncome, setMonthlyIncome] = useState(50000);
    const [tenure, setTenure] = useState(1);
    const [interestRate, setInterestRate] = useState(6);
    const [otherEMI, setOtherEMI] = useState(10000);
    const [eligibleLoanAmount, setEligibleLoanAmount] = useState(0);
    const [maxEMI, setMaxEMI] = useState(0);

    useEffect(() => {
        const calculateLoanDetails = () => {
            const calculatedMaxEMI = 0.25 * monthlyIncome;
            const calculatedLoanAmount = (monthlyIncome * tenure * 12) - (otherEMI * tenure * 12);

            setMaxEMI(calculatedMaxEMI);
            setEligibleLoanAmount(calculatedLoanAmount);
        };

        calculateLoanDetails();
    }, [monthlyIncome, tenure, interestRate, otherEMI]);

    const data = [
        { name: 'Maturity Value', value: eligibleLoanAmount },
        { name: 'Maximum EMI', value: maxEMI },
        { name: 'Monthly Income', value: monthlyIncome },
    ];

    return (
        <div className="container mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            <h2 className="mb-4 text-center">Loan Eligibility Calculator</h2>
            <p className="text-center">Calculate your home loan eligibility based on your income and expenses.</p>

            <div className="row g-3"> 
                {/* Input Form */}
                <div className="col-lg-4 col-md-6">
                    <div className="card p-3 shadow-sm">
                        <h4>Enter Your Details</h4>
                        <label>Monthly Income</label>
                        <input type="number" className="form-control" value={monthlyIncome} onChange={(e) => setMonthlyIncome(parseInt(e.target.value))} />

                        <label>Tenure (Years)</label>
                        <input type="number" className="form-control" value={tenure} onChange={(e) => setTenure(parseInt(e.target.value))} />

                        <label>Interest Rate (%)</label>
                        <input type="number" className="form-control" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />

                        <label>Other EMI (Monthly)</label>
                        <input type="number" className="form-control" value={otherEMI} onChange={(e) => setOtherEMI(parseInt(e.target.value))} />
                    </div>
                </div>

                {/* Loan Eligibility Output */}
                <div className="col-lg-4 col-md-6">
                    <div className="card p-3 shadow-sm text-center bg-light">
                        <h4>Your Loan Eligibility</h4>
                        <p>Eligible Loan Amount:</p>
                        <h5 className="text-primary">₹ {eligibleLoanAmount.toLocaleString()}</h5>
                        <p>Maximum EMI:</p>
                        <h5 className="text-success">₹ {maxEMI.toLocaleString()}</h5>
                        <p>For Tenure of {tenure} Years</p>
                    </div>
                </div>

                {/* Donut Chart */}
                <div className="col-lg-4 col-md-12">
                    <div className="card p-3 shadow-sm">
                        <h4 className="text-center">Payment Breakdown</h4>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie data={data} cx="50%" cy="50%" outerRadius={70} innerRadius={40} dataKey="value">
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="d-flex justify-content-center flex-wrap mt-3">
                            {data.map((entry, index) => (
                                <span key={index} className="d-flex align-items-center mx-2" style={{ fontSize: '12px' }}>
                                    <span className="rounded-circle d-inline-block me-1" style={{ width: '12px', height: '12px', backgroundColor: COLORS[index % COLORS.length] }}></span>
                                    {entry.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLoanCalculator;
