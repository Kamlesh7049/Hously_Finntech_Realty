import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EligibilityCalculatorCreative() {
    const [netIncome, setNetIncome] = useState(45000);
    const [monthlyObligations, setMonthlyObligations] = useState(1);
    const [interestRate, setInterestRate] = useState(8.75);
    const [tenureYears, setTenureYears] = useState(10);
    const [loanEligibility, setLoanEligibility] = useState(0);
    const [emi, setEmi] = useState(0);
    const [tenureUnit, setTenureUnit] = useState('years');

    const calculateEligibility = () => {
        // This is a simplified example, replace with actual logic
        const disposableIncome = netIncome - monthlyObligations;
        const eligibility = disposableIncome * 400; // Adjusted multiplier for potentially larger numbers
        setLoanEligibility(Math.max(0, Math.round(eligibility)));

        const principal = Math.max(0, Math.round(eligibility));
        const ratePerMonth = interestRate / 1200;
        const tenureInMonths = tenureUnit === 'years' ? tenureYears * 12 : tenureYears;
        let emiValue = 0;

        if (ratePerMonth > 0) {
            emiValue = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureInMonths)) / (Math.pow(1 + ratePerMonth, tenureInMonths) - 1);
        } else if (tenureInMonths > 0) {
            emiValue = principal / tenureInMonths;
        }
        setEmi(emiValue.toFixed(0));
    };

    useEffect(() => {
        calculateEligibility();
    }, [netIncome, monthlyObligations, interestRate, tenureYears, tenureUnit]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseFloat(value) : value;

        switch (name) {
            case 'netIncome':
                setNetIncome(parsedValue);
                break;
            case 'monthlyObligations':
                setMonthlyObligations(parsedValue);
                break;
            case 'interestRate':
                setInterestRate(parsedValue);
                break;
            case 'tenureYears':
                setTenureYears(parseInt(value, 10));
                break;
            default:
                break;
        }
    };

    const handleTenureUnitChange = (unit) => {
        setTenureUnit(unit);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Home Loan Eligibility Calculator</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="netIncome" className="form-label">Net income (monthly)</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₹</span>
                                            <input type="number" className="form-control" id="netIncome" name="netIncome" value={netIncome} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="0" max="100000" value={netIncome} name="netIncome" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between">
                                            <small>₹0</small>
                                            <small>₹1,00,000</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="monthlyObligations" className="form-label">Monthly obligations</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₹</span>
                                            <input type="number" className="form-control" id="monthlyObligations" name="monthlyObligations" value={monthlyObligations} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="0" max="50000" value={monthlyObligations} name="monthlyObligations" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between">
                                            <small>₹0</small>
                                            <small>₹50,000</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="interestRate" className="form-label">Rate of interest</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="interestRate" name="interestRate" value={interestRate} onChange={handleInputChange} />
                                            <span className="input-group-text">%</span>
                                        </div>
                                        <input type="range" className="form-range" min="7" max="13" step="0.01" value={interestRate} name="interestRate" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between">
                                            <small>7% p.a</small>
                                            <small>13% p.a</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="tenureYears" className="form-label">Tenure</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="tenureYears" name="tenureYears" value={tenureYears} onChange={handleInputChange} />
                                            <button
                                                type="button"
                                                className={`btn ${tenureUnit === 'years' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                                                onClick={() => handleTenureUnitChange('years')}
                                            >
                                                Yr
                                            </button>
                                            <button
                                                type="button"
                                                className={`btn ${tenureUnit === 'months' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                                                onClick={() => handleTenureUnitChange('months')}
                                            >
                                                Mo
                                            </button>
                                        </div>
                                        <input type="range" className="form-range" min="1" max="30" value={tenureYears} name="tenureYears" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between">
                                            <small>1 Year</small>
                                            <small>30 Years</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h4 className="text-center mb-3">Congratulations!</h4>
                                        <p className="text-center">You are eligible for a Home Loan upto</p>
                                        <div className="bg-success text-white p-3 rounded text-center mb-3">
                                            <h5 className="mb-0">Total loan amount</h5>
                                            <h2 className="mb-0">₹{loanEligibility.toLocaleString('en-IN')}*</h2>
                                            <hr className="my-2 bg-light" />
                                            <h5 className="mb-0">EMI</h5>
                                            <h2 className="mb-0">₹{emi}*</h2>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EligibilityCalculatorCreative;