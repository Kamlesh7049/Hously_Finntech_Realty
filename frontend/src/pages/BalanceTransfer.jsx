import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BalanceTransferCalculator() {
    // State variables
    const [requestedLoanAmount, setRequestedLoanAmount] = useState(2000000);
    const [requestedTenure, setRequestedTenure] = useState(2);
    const [netSalaryIncome, setNetSalaryIncome] = useState(300000);
    const [monthlyObligation, setMonthlyObligation] = useState(200000);
    const [loanPrincipleOutstanding, setLoanPrincipleOutstanding] = useState(5000000);
    const [existingEMI, setExistingEMI] = useState(200000);
    const [tenureUnit, setTenureUnit] = useState('years');

    // Calculated values placeholders
    const [balanceTransferAmount, setBalanceTransferAmount] = useState(0);
    const [totalSavings, setTotalSavings] = useState(4250406);
    const [emiOfFinalEligibility, setEmiOfFinalEligibility] = useState(0);
    const [finalTotalEligibility, setFinalTotalEligibility] = useState(0);
    const [topUpAmount, setTopUpAmount] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(177100);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseInt(value, 10) : parseFloat(value);
        switch (name) {
            case 'requestedLoanAmount': setRequestedLoanAmount(parsedValue); break;
            case 'requestedTenure': setRequestedTenure(parsedValue); break;
            case 'netSalaryIncome': setNetSalaryIncome(parsedValue); break;
            case 'monthlyObligation': setMonthlyObligation(parsedValue); break;
            case 'loanPrincipleOutstanding': setLoanPrincipleOutstanding(parsedValue); break;
            case 'existingEMI': setExistingEMI(parsedValue); break;
            default: break;
        }
        // Calculation logic here
    };

    const handleTenureUnitChange = (unit) => {
        setTenureUnit(unit);
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-7 col-xl-6"> {/* Further reduced size */}
                    <div className="card shadow-lg border-0 rounded-lg"> {/* Added shadow and removed border */}
                        <div className="card-body p-4">
                            <h3 className="text-center font-weight-light mb-4">Balance Transfer Calculator</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="requestedLoanAmount" className="form-label small text-muted">Requested Loan Amount</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="requestedLoanAmount" name="requestedLoanAmount" value={requestedLoanAmount} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="500000" max="50000000" value={requestedLoanAmount} name="requestedLoanAmount" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹5L</small><small className="text-muted">₹5Cr</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="requestedTenure" className="form-label small text-muted">Requested Tenure</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="requestedTenure" name="requestedTenure" value={requestedTenure} onChange={handleInputChange} />
                                            <button type="button" className={`btn btn-outline-secondary btn-sm ${tenureUnit === 'years' ? 'active' : ''}`} onClick={() => handleTenureUnitChange('years')}>Yr</button>
                                            <button type="button" className={`btn btn-outline-secondary btn-sm ${tenureUnit === 'months' ? 'active' : ''}`} onClick={() => handleTenureUnitChange('months')}>Mo</button>
                                        </div>
                                        <input type="range" className="form-range" min="1" max="30" value={requestedTenure} name="requestedTenure" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">1 Yr</small><small className="text-muted">30 Yrs</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="netSalaryIncome" className="form-label small text-muted">Net Salary/Income</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="netSalaryIncome" name="netSalaryIncome" value={netSalaryIncome} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="15000" max="10000000" value={netSalaryIncome} name="netSalaryIncome" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹15K</small><small className="text-muted">₹1Cr</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="monthlyObligation" className="form-label small text-muted">Monthly Obligation</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="monthlyObligation" name="monthlyObligation" value={monthlyObligation} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="10" max="1000000" value={monthlyObligation} name="monthlyObligation" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹10</small><small className="text-muted">₹10L</small></div>
                                    </div>
{/* 
                                    <div className="mb-3">
                                        <label htmlFor="costOfProperty" className="form-label small text-muted">Cost of Property</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="costOfProperty" name="costOfProperty" value={costOfProperty} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="200000" max="50000000" value={costOfProperty} name="costOfProperty" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹2L</small><small className="text-muted">₹5Cr</small></div>
                                    </div> */}

                                    <div className="mb-3">
                                        <label htmlFor="loanPrincipleOutstanding" className="form-label small text-muted">Loan Principle Outstanding</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="loanPrincipleOutstanding" name="loanPrincipleOutstanding" value={loanPrincipleOutstanding} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="200000" max="50000000" value={loanPrincipleOutstanding} name="loanPrincipleOutstanding" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹2L</small><small className="text-muted">₹5Cr</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="existingEMI" className="form-label small text-muted">Existing EMI</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="existingEMI" name="existingEMI" value={existingEMI} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="10" max="1000000" value={existingEMI} name="existingEMI" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹10</small><small className="text-muted">₹10L</small></div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="bg-primary text-white p-3 rounded mb-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="small">Balance Transfer Amount</div>
                                            <h4>₹{balanceTransferAmount.toLocaleString('en-IN')}*</h4>
                                        </div>
                                        <hr className="my-2 bg-light" />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="small">Total Savings</div>
                                            <h4>₹{totalSavings.toLocaleString('en-IN')}*</h4>
                                        </div>
                                    </div>

                                    <div className="bg-success text-white p-3 rounded mb-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="small">EMI of Final Eligibility</div>
                                            <h4>₹{emiOfFinalEligibility.toLocaleString('en-IN')}*</h4>
                                        </div>
                                        <hr className="my-2 bg-light" />
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="small">Final Total Eligibility</div>
                                            <h4>₹{finalTotalEligibility.toLocaleString('en-IN')}*</h4>
                                        </div>
                                        <hr className="my-2 bg-light" />
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="small">Top Up Amount</div>
                                            <h4>₹{topUpAmount.toLocaleString('en-IN')}*</h4>
                                        </div>
                                        <hr className="my-2 bg-light" />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="small">Monthly Savings</div>
                                            <h4>₹{monthlySavings.toLocaleString('en-IN')}*</h4>
                                        </div>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg">Apply Now</button>
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

export default BalanceTransferCalculator;