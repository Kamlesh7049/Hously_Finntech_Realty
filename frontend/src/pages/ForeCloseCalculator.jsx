import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ForecloseCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [loanTenure, setLoanTenure] = useState(2);
  const [interestRate, setInterestRate] = useState(8);
  const [emiPaid, setEmiPaid] = useState(6);

  const [foreclosureAmount, setForeclosureAmount] = useState(0);
  const [monthlyEMIPaidValue, setMonthlyEMIPaidValue] = useState(0);
  const [interestPaid, setInterestPaid] = useState(0);
  const [interestSaved, setInterestSaved] = useState(0);

  useEffect(() => {
    calculateForeclosure();
  }, [loanAmount, loanTenure, interestRate, emiPaid]);

  const calculateForeclosure = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTenure * 12;

    const emi =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    let outstandingPrincipal = loanAmount;
    for (let i = 0; i < emiPaid; i++) {
      const interestComponent = outstandingPrincipal * monthlyInterestRate;
      outstandingPrincipal -= emi - interestComponent;
    }

    setForeclosureAmount(outstandingPrincipal.toFixed(0));
    setMonthlyEMIPaidValue(emi.toFixed(0));

    const totalInterestPayable = emi * numberOfPayments - loanAmount;

    let totalInterestPaid = 0;
    let principalPaid = 0;
    let balance = loanAmount;

    for (let i = 0; i < emiPaid; i++) {
      const interestComponent = balance * monthlyInterestRate;
      const principalComponent = emi - interestComponent;

      totalInterestPaid += interestComponent;
      principalPaid += principalComponent;
      balance -= principalComponent;
    }

    const remainingInterest = totalInterestPayable - totalInterestPaid;

    setInterestPaid(totalInterestPaid.toFixed(0));
    setInterestSaved(remainingInterest.toFixed(0));
  };

  const doughnutChartData = {
    labels: ['Interest Paid', 'Interest Saved'],
    datasets: [
      {
        label: 'Payment Breakdown',
        data: [interestPaid, interestSaved],
        backgroundColor: ['#FFC107', '#007BFF'],
        borderWidth: 0,
      },
    ],
  };

  const doughnutChartOptions = {
    cutout: '70%',
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '900px' }}> {/* Reduced margin-top and added max-width */}
      <div className="card shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card-body p-3"> {/* Reduced padding */}
          <h5 className="text-center mb-3" style={{ color: '#007BFF', fontSize: '1.2rem' }}> {/* Reduced margin and font size */}
            Loan Foreclosure Calculator
          </h5>
          <p className="text-center text-muted" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}> {/* Reduced font size and margin */}
            A loan foreclosure calculator is a valuable tool for anyone with a loan. It helps you to
            understand the costs and benefits of paying off your loan sooner rather than later.
          </p>

          <div className="row">
            <div className="col-md-4 d-flex">
              <div className="p-2 rounded flex-fill" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}> {/* Reduced padding */}
                <h6 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Loan Details</h6> {/* Reduced font size and margin */}
                {/* Loan Amount Input */}
                <div className="mb-2"> {/* Reduced margin-bottom */}
                  <label htmlFor="loanAmount" className="form-label" style={{ fontSize: '0.7rem' }}>Loan Amount</label> {/* Reduced font size */}
                  <input
                    type="range"
                    className="form-range"
                    id="loanAmount"
                    min="50000"
                    max="50000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  />
                  <div className="d-flex justify-content-between" style={{ fontSize: '0.6rem' }}> {/* Reduced font size */}
                    <span>50 K</span>
                    <span>5 Cr</span>
                  </div>
                  <div className="text-center" style={{ fontSize: '0.8rem' }}>₹{loanAmount.toLocaleString('en-IN')}</div> {/* Reduced font size */}
                </div>
                {/* Loan Tenure Input */}
                <div className="mb-2"> {/* Reduced margin-bottom */}
                  <label htmlFor="loanTenure" className="form-label" style={{ fontSize: '0.7rem' }}>Loan Tenure (Years)</label> {/* Reduced font size */}
                  <input
                    type="range"
                    className="form-range"
                    id="loanTenure"
                    min="1"
                    max="20"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                  />
                  <div className="d-flex justify-content-between" style={{ fontSize: '0.6rem' }}> {/* Reduced font size */}
                    <span>1</span>
                    <span>20</span>
                  </div>
                  <div className="text-center" style={{ fontSize: '0.8rem' }}>{loanTenure} Years</div> {/* Reduced font size */}
                </div>
                {/* Interest Rate Input */}
                <div className="mb-2"> {/* Reduced margin-bottom */}
                  <label htmlFor="interestRate" className="form-label" style={{ fontSize: '0.7rem' }}>Rate of Interest (%)</label> {/* Reduced font size */}
                  <input
                    type="range"
                    className="form-range"
                    id="interestRate"
                    min="5"
                    max="32"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  />
                  <div className="d-flex justify-content-between" style={{ fontSize: '0.6rem' }}> {/* Reduced font size */}
                    <span>5</span>
                    <span>32</span>
                  </div>
                  <div className="text-center" style={{ fontSize: '0.8rem' }}>{interestRate}%</div> {/* Reduced font size */}
                </div>
                {/* EMI Paid Input */}
                <div className="mb-2"> {/* Reduced margin-bottom */}
                  <label htmlFor="emiPaid" className="form-label" style={{ fontSize: '0.7rem' }}>EMI Paid</label> {/* Reduced font size */}
                  <input
                    type="range"
                    className="form-range"
                    id="emiPaid"
                    min="0"
                    max={loanTenure * 12}
                    step="1"
                    value={emiPaid}
                    onChange={(e) => setEmiPaid(parseInt(e.target.value))}
                  />
                  <div className="d-flex justify-content-between" style={{ fontSize: '0.6rem' }}> {/* Reduced font size */}
                    <span>0</span>
                    <span>{loanTenure * 12}</span>
                  </div>
                  <div className="text-center" style={{ fontSize: '0.8rem' }}>{emiPaid}</div> {/* Reduced font size */}
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="p-2 rounded flex-fill d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}> {/* Reduced padding */}
                <h6 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Foreclosure Amount</h6> {/* Reduced font size and margin */}
                <h6 style={{ color: '#007BFF', fontSize: '1rem' }}>₹{foreclosureAmount.toLocaleString('en-IN')}</h6> {/* Reduced font size */}
                <h6 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Monthly EMI Paid</h6> {/* Reduced font size and margin */}
                <h6 style={{ color: '#007BFF', fontSize: '1rem' }}>₹{monthlyEMIPaidValue.toLocaleString('en-IN')}</h6> {/* Reduced font size */}
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="p-2 rounded flex-fill d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}> {/* Reduced padding */}
                <h6 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Payment Breakdown</h6> {/* Reduced font size and margin */}
                <div className="d-flex justify-content-center">
                  <div style={{ width: '150px', height: '150px' }}> {/* Reduced chart size */}
                    <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                  </div>
                </div>
                <div className="mt-1"> {/* Reduced margin-top */}
                  <div className="d-flex justify-content-between" style={{ fontSize: '0.7rem' }}> {/* Reduced font size */}
                    <div>
                      <span className="badge me-1" style={{ backgroundColor: '#FFC107' }}></span> {/* Reduced margin-right */}
                      Interest Paid
                    </div>
                    <div>₹{interestPaid}</div>
                  </div>
                  <div className="d-flex justify-content-between" style={{ fontSize: '0.7rem' }}> {/* Reduced font size */}
                    <div>
                      <span className="badge me-1" style={{ backgroundColor: '#007BFF' }}></span> {/* Reduced margin-right */}
                      Interest Saved
                    </div>
                    <div>₹{interestSaved}</div>
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

export default ForecloseCalculator;