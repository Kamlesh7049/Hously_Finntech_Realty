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
    <div className="container mt-5">
      <div className="card shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card-body">
          <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>
            Loan Foreclosure Calculator
          </h2>
          <p className="text-center text-muted">
            A loan foreclosure calculator is a valuable tool for anyone with a loan. It helps you to
            understand the costs and benefits of paying off your loan sooner rather than later.
          </p>

          <div className="row">
            <div className="col-md-4 d-flex">
              <div className="p-3 rounded flex-fill" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
                <h4>Loan Details</h4>
                {/* Loan Amount Input */}
                <div className="mb-3">
                  <label htmlFor="loanAmount" className="form-label">Loan Amount</label>
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
                  <div className="d-flex justify-content-between">
                    <span>50 K</span>
                    <span>5 Cr</span>
                  </div>
                  <div className="text-center">₹{loanAmount.toLocaleString('en-IN')}</div>
                </div>
                {/* Loan Tenure Input */}
                <div className="mb-3">
                  <label htmlFor="loanTenure" className="form-label">Loan Tenure (Years)</label>
                  <input
                    type="range"
                    className="form-range"
                    id="loanTenure"
                    min="1"
                    max="20"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                  />
                  <div className="d-flex justify-content-between">
                    <span>1</span>
                    <span>20</span>
                  </div>
                  <div className="text-center">{loanTenure} Years</div>
                </div>
                {/* Interest Rate Input */}
                <div className="mb-3">
                  <label htmlFor="interestRate" className="form-label">Rate of Interest (%)</label>
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
                  <div className="d-flex justify-content-between">
                    <span>5</span>
                    <span>32</span>
                  </div>
                  <div className="text-center">{interestRate}%</div>
                </div>
                {/* EMI Paid Input */}
                <div className="mb-3">
                  <label htmlFor="emiPaid" className="form-label">EMI Paid</label>
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
                  <div className="d-flex justify-content-between">
                    <span>0</span>
                    <span>{loanTenure * 12}</span>
                  </div>
                  <div className="text-center">{emiPaid}</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex">
  <div className="p-3 rounded flex-fill d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
    <h4>Foreclosure Amount</h4>
    <h1 style={{ color: '#007BFF' }}>₹{foreclosureAmount.toLocaleString('en-IN')}</h1>
    <br />
    <h4>Monthly EMI Paid</h4>
    <h1 style={{ color: '#007BFF' }}>₹{monthlyEMIPaidValue.toLocaleString('en-IN')}</h1>
  </div>
</div>
<div className="col-md-4 d-flex">
  <div className="p-3 rounded flex-fill d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
    <h4>Payment Breakdown</h4>
    <div className="d-flex justify-content-center">
      <div style={{ width: '200px', height: '200px' }}>
        <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
      </div>
    </div>
    <div className="mt-3">
      <div className="d-flex justify-content-between">
        <div>
          <span className="badge me-2" style={{ backgroundColor: '#FFC107' }}></span>
          Interest Paid
        </div>
        <div>₹{interestPaid}</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <span className="badge me-2" style={{ backgroundColor: '#007BFF' }}></span>
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