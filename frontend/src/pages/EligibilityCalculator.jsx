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
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <style>
                {`
                .container {
                    max-width: 900px; /* Adjust as needed */
                    margin: auto;
                    padding: 20px;
                }
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }
                .col-md-4 {
                    flex: 0 0 33.333333%;
                    max-width: 33.333333%;
                    padding-right: 15px;
                    padding-left: 15px;
                    box-sizing: border-box;
                }
                .card {
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px;
                    padding: 20px; /* Add padding to cards */
                    height: 100%; /* Make cards same height */
                    display: flex;
                    flex-direction: column;
                }
                .form-control {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 10px;
                    border: 1px solid #ced4da;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                .btn {
                    background-color: #28a745;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    box-sizing: border-box;
                    margin-top: auto; /* Push button to the bottom */
                }
                .btn:hover {
                    background-color: #218838;
                }
                .eligibility-card {
                    background-color: #f8f9fa;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .eligibility-card h4 {
                    color: #28a745;
                }
                .eligibility-card h5 {
                    color: #007bff;
                }
                .legend-item {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                    font-size: 12px;
                }
                .legend-color {
                    width: 12px;
                    height: 12px;
                    margin-right: 5px;
                    border-radius: 50%;
                }
            `}
            </style>
            <div className="container">
                <h2 className="mb-4 text-center">Loan Eligibility Calculator</h2>
                <p className="text-center">Calculate your home loan eligibility based on your income and expenses.</p>

                <div className="row">
                    {/* Section 1: Input Form */}
                    <div className="col-md-4">
                        <div className="card">
                            <h4>Enter Your Details</h4>
                            <label htmlFor="monthlyIncome">Monthly Income</label>
                            <input
                                type="number"
                                className="form-control"
                                id="monthlyIncome"
                                value={monthlyIncome}
                                onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
                            />
                            <label htmlFor="tenure">Tenure (Years)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="tenure"
                                value={tenure}
                                onChange={(e) => setTenure(parseInt(e.target.value))}
                            />
                            <label htmlFor="interestRate">Interest Rate (%)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="interestRate"
                                value={interestRate}
                                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                            />
                            <label htmlFor="otherEMI">Other EMI (Monthly)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="otherEMI"
                                value={otherEMI}
                                onChange={(e) => setOtherEMI(parseInt(e.target.value))}
                            />
                            <button className="btn">Calculate</button>
                        </div>
                    </div>

                    {/* Section 2: Loan Eligibility Output */}
                    <div className="col-md-4">
                        <div className="card eligibility-card">
                            <h4>Your Loan Eligibility</h4>
                            <p>Eligible Loan Amount:</p>
                            <h5>₹ {eligibleLoanAmount.toLocaleString()}</h5>
                            <p>Maximum EMI:</p>
                            <h5>₹ {maxEMI.toLocaleString()}</h5>
                            <p>For Tenure of {tenure} Years</p>
                            <div></div>
                        </div>
                    </div>

                    {/* Section 3: Donut Chart */}
                    <div className="col-md-4">
                        <div className="card">
                            <h4>Payment Breakdown</h4>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={70}
                                        innerRadius={40}
                                        dataKey="value"
                                        isAnimationActive={false}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="d-flex justify-content-center mt-3">
                                {data.map((entry, index) => (
                                    <span key={index} className="legend-item">
                                        <span
                                            className="legend-color"
                                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                        ></span>
                                        {entry.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLoanCalculator;