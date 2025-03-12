// HomeLoanCalculator.jsx
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
// import './HomeLoanCalculator.css';

Chart.register(ArcElement);

function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [loanTenure, setLoanTenure] = useState(20);
    const [interestRate, setInterestRate] = useState(6.5);
    const [emi, setEmi] = useState(0);
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [interestPayable, setInterestPayable] = useState(0);
    const [totalAmountPayable, setTotalAmountPayable] = useState(0);
    const [showEmiSchedule, setShowEmiSchedule] = useState(false);

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, loanTenure, interestRate]);

    const calculateEMI = () => {
        const monthlyInterestRate = interestRate / 12 / 100;
        const numberOfPayments = loanTenure * 12;
        const emiValue =
            (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        setEmi(emiValue ? Math.round(emiValue) : 0);
        setPrincipalAmount(loanAmount);
        setInterestPayable(emiValue * numberOfPayments - loanAmount);
        setTotalAmountPayable(emiValue * numberOfPayments);
    };

    const handleLoanAmountChange = (event) => {
        setLoanAmount(Number(event.target.value));
    };

    const handleLoanTenureChange = (event) => {
        setLoanTenure(Number(event.target.value));
    };

    const handleInterestRateChange = (event) => {
        setInterestRate(Number(event.target.value));
    };

    const toggleEmiSchedule = () => {
        setShowEmiSchedule(!showEmiSchedule);
    };

    const generateEmiSchedule = () => {
        const monthlyInterestRate = interestRate / 12 / 100;
        const numberOfPayments = loanTenure * 12;
        let balance = loanAmount;
        const schedule = [];

        for (let i = 1; i <= numberOfPayments; i++) {
            const interestForMonth = balance * monthlyInterestRate;
            const principalForMonth = emi - interestForMonth;
            balance -= principalForMonth;

            schedule.push({
                month: i,
                year: Math.ceil(i / 12),
                emi: emi,
                principal: principalForMonth,
                interest: interestForMonth,
                balance: balance > 0 ? balance : 0
            });
        }

        return schedule;
    };

    const chartData = {
        labels: ['Principal Amount', 'Interest Payable'],
        datasets: [
            {
                data: [principalAmount, interestPayable],
                backgroundColor: ['#F44336', '#3F51B5'],
                hoverBackgroundColor: ['#E57373', '#7986CB'],
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
    };

    return (
        <div className="home-loan-calculator-container">
            <h1>Home Loan EMI Calculator</h1>
            <p className="calculator-description">
            The Home Loan EMI Calculator is a simple yet powerful tool designed to help homebuyers and homeowners in India estimate their monthly loan installments. With a user-friendly interface and accurate calculations, this tool enables better financial planning by providing clear insights into potential home loan repayments.

Make informed property investment decisions with confidence using our trusted EMI calculator. Plan your home-buying journey wisely with Urban Money. Simply enter the required details, and the calculator will instantly compute your EMI amount.
            </p>
            <div className="calculator-wrapper">
                <div className="input-panel">
                    <h2>Loan Details</h2>
                    <InputGroup
                        label="Loan Amount"
                        id="loanAmount"
                        min="5"
                        max="500000"
                        step="100000"
                        value={loanAmount}
                        onChange={handleLoanAmountChange}
                        suffix="₹"
                    />
                    <InputGroup
                        label="Loan Tenure"
                        id="loanTenure"
                        min="5"
                        max="30"
                        step="1"
                        value={loanTenure}
                        onChange={handleLoanTenureChange}
                        suffix="Years"
                    />
                    <InputGroup
                        label="Rate of Interest"
                        id="interestRate"
                        min="6"
                        max="20"
                        step="0.5"
                        value={interestRate}
                        onChange={handleInterestRateChange}
                        suffix="%"
                    />
                </div>

                <div className="emi-panel">
                    <h2>Monthly Loan EMI</h2>
                    <div className="emi-details">
                        <p className="emi-value">₹ {emi.toLocaleString()}</p>
                        <p className="emi-description">Seven Thousand Four Hundred And Fifty Six Rupees</p>
                    </div>
                </div>

                <div className="payment-breakdown-panel">
                    <h2>Payment Breakdown</h2>

                    <div className="chart-container">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>

                    <div className="breakdown-details">
                        <div className="breakdown-item">
                            <span className="color-indicator" style={{ backgroundColor: '#F44336' }}></span>
                            <span className="item-label">Principal Amount</span>
                            <span className="item-value">₹ {principalAmount.toLocaleString()}</span>
                        </div>
                        <div className="breakdown-item">
                            <span className="color-indicator" style={{ backgroundColor: '#3F51B5' }}></span>
                            <span className="item-label">Interest Payable</span>
                            <span className="item-value">₹ {interestPayable.toLocaleString()}</span>
                        </div>
                        <div className="breakdown-item">
                            <span className="item-label">Total Amount Payable</span>
                            <span className="item-value">₹ {totalAmountPayable.toLocaleString()}</span>
                        </div>
                    </div>

                    <button className="view-schedule-button" onClick={toggleEmiSchedule}>
                        {showEmiSchedule ? "Hide EMI Schedule ↑" : "View EMI Schedule →"}
                    </button>
                </div>
            </div>

            {showEmiSchedule && (
                <div className="emi-schedule-section">
                    <h2>EMI Payment Schedule</h2>
                    <div className="table-responsive">
                        <table className="emi-schedule-table">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Principal (₹)</th>
                                    <th>Interest (₹)</th>
                                    <th>EMI (₹)</th>
                                    <th>Balance (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generateEmiSchedule().map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.month}</td>
                                        <td>{row.year}</td>
                                        <td>{Math.round(row.principal).toLocaleString()}</td>
                                        <td>{Math.round(row.interest).toLocaleString()}</td>
                                        <td>{Math.round(row.emi).toLocaleString()}</td>
                                        <td>{Math.round(row.balance).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

function InputGroup({ label, id, min, max, step, value, onChange, suffix }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                type="range"
                id={id}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
            />
            <div className="input-row">
                <div className="range-labels">
                    <span>{min.toLocaleString()}</span>
                    <span>{max.toLocaleString()}</span>
                </div>
                <span className="input-value">
                    {suffix === "₹" ? suffix + ' ' : ''}
                    {Number(value).toLocaleString()}
                    {suffix && suffix !== "₹" ? ' ' + suffix : ''}
                </span>
            </div>
        </div>
    );
}

export default EmiCalculator;