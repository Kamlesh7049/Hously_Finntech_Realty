import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrePaymentCalculator() {
    // State variables for input
    const [loanAmount, setLoanAmount] = useState(100000);
    const [loanDurationYears, setLoanDurationYears] = useState(2);
    const [rateOfInterest, setRateOfInterest] = useState(11.99);
    const [partPaymentAmount, setPartPaymentAmount] = useState(13114);
    const [paymentMonths, setPaymentMonths] = useState(1);

    // State variables for calculated output
    const [revisedEMI, setRevisedEMI] = useState(0);
    const [revisedTenureMonths, setRevisedTenureMonths] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [remainingPrincipal, setRemainingPrincipal] = useState(0);

    // Function to calculate the revised EMI and tenure (Needs actual logic)
    const calculateRepayment = () => {
        // Placeholder logic - replace with actual financial calculations
        const monthlyInterestRate = rateOfInterest / 1200;
        const initialTenureMonths = loanDurationYears * 12;

        // Simplified calculation - needs proper financial formulas
        const newPrincipal = loanAmount - partPaymentAmount;
        const remainingMonths = Math.max(0, initialTenureMonths - paymentMonths);

        setRemainingPrincipal(newPrincipal);
        setRevisedTenureMonths(remainingMonths);
        setTotalPayment(newPrincipal * (1 + monthlyInterestRate * remainingMonths)); // Very basic
        setRevisedEMI(totalPayment / remainingMonths || 0);

        // More sophisticated calculations would be needed here
    };

    useEffect(() => {
        calculateRepayment();
    }, [loanAmount, loanDurationYears, rateOfInterest, partPaymentAmount, paymentMonths]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseInt(value, 10) : parseFloat(value);

        switch (name) {
            case 'loanAmount':
                setLoanAmount(parsedValue);
                break;
            case 'loanDurationYears':
                setLoanDurationYears(parsedValue);
                break;
            case 'rateOfInterest':
                setRateOfInterest(parseFloat(value));
                break;
            case 'partPaymentAmount':
                setPartPaymentAmount(parsedValue);
                break;
            case 'paymentMonths':
                setPaymentMonths(parsedValue);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-7 col-xl-6">
                    <div className="card shadow-sm border-0 rounded-lg">
                        <div className="card-body p-4">
                            <h5 className="card-title text-center mb-3">Loan Repayment Calculator</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="loanAmount" className="form-label small text-muted">Loan amount</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="loanAmount" name="loanAmount" value={loanAmount} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="40000" max="3500000" value={loanAmount} name="loanAmount" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹40,000</small><small className="text-muted">₹35,00,000</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="loanDurationYears" className="form-label small text-muted">Loan duration</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="loanDurationYears" name="loanDurationYears" value={loanDurationYears} onChange={handleInputChange} />
                                            <span className="input-group-text">Yr</span>
                                            <button type="button" className="btn btn-outline-secondary btn-sm">Mo</button> {/* Placeholder */}
                                        </div>
                                        <input type="range" className="form-range" min="1" max="6" value={loanDurationYears} name="loanDurationYears" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">1 Year</small><small className="text-muted">6 Years</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="rateOfInterest" className="form-label small text-muted">Rate of Interest</label>
                                        <div className="input-group">
                                            <input type="number" step="0.01" className="form-control" id="rateOfInterest" name="rateOfInterest" value={rateOfInterest} onChange={handleInputChange} />
                                            <span className="input-group-text">%</span>
                                        </div>
                                        <input type="range" className="form-range" min="11.99" max="35" step="0.01" value={rateOfInterest} name="rateOfInterest" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">11.99% p.a</small><small className="text-muted">35% p.a</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="partPaymentAmount" className="form-label small text-muted">Part payment amount</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white text-muted">₹</span>
                                            <input type="number" className="form-control border-start-0" id="partPaymentAmount" name="partPaymentAmount" value={partPaymentAmount} onChange={handleInputChange} />
                                        </div>
                                        <input type="range" className="form-range" min="1000" max="20000" value={partPaymentAmount} name="partPaymentAmount" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">₹1,000</small><small className="text-muted">₹20,000</small></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="paymentMonths" className="form-label small text-muted">Payment months</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="paymentMonths" name="paymentMonths" value={paymentMonths} onChange={handleInputChange} />
                                            <span className="input-group-text">Yr</span> {/* Assuming input is in months based on label */}
                                            <button type="button" className="btn btn-outline-secondary btn-sm">Mo</button> {/* Placeholder */}
                                        </div>
                                        <input type="range" className="form-range" min="1" max="72" value={paymentMonths} name="paymentMonths" onChange={handleInputChange} />
                                        <div className="d-flex justify-content-between"><small className="text-muted">1 Year</small><small className="text-muted">6 Years</small></div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="bg-info bg-opacity-75 text-white p-3 rounded">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="small">Revised EMI <span className="fw-light">(Fixed Tenure)</span></div>
                                                <h4>₹{revisedEMI.toFixed(0)}*</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="bg-info bg-opacity-75 text-white p-3 rounded">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="small">Revised Tenure <span className="fw-light">(Fixed EMI)</span></div>
                                                <h4>{Math.floor(revisedTenureMonths / 12)} Years {revisedTenureMonths % 12} Months</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-success bg-opacity-75 text-white p-3 rounded mb-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="small">Total Payment <span className="fw-light">Principal + Interest</span></div>
                                            <h4>₹{totalPayment.toFixed(0)}*</h4>
                                        </div>
                                        <hr className="my-2 bg-light" />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="small">Remaining Principal</div>
                                            <h4>₹{remainingPrincipal.toFixed(0)}*</h4>
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

export default PrePaymentCalculator;