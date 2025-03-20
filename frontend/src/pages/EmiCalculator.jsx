import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

function HomeLoanCalculator() {
    const [loanAmount, setLoanAmount] = useState(46059000);
    const [loanDurationYears, setLoanDurationYears] = useState(10);
    const [loanDurationMonths, setLoanDurationMonths] = useState(0);
    const [interestRate, setInterestRate] = useState(8.75);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [pieChartData, setPieChartData] = useState([]);
    const [durationType, setDurationType] = useState('years');
    const [isHomeLoanDropdownOpen, setIsHomeLoanDropdownOpen] = useState(false);
    const homeLoanDropdownRef = useRef(null);

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, loanDurationYears, loanDurationMonths, interestRate, durationType]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (homeLoanDropdownRef.current && !homeLoanDropdownRef.current.contains(event.target)) {
                setIsHomeLoanDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [homeLoanDropdownRef]);

    const calculateEMI = () => {
        let totalMonths = durationType === 'years' ? loanDurationYears * 12 : loanDurationMonths;
        if (totalMonths <= 0) {
            setMonthlyEMI(0);
            setTotalPayable(0);
            setTotalInterest(0);
            updatePieChartData(0, 0);
            return;
        }

        const r = interestRate / 12 / 100;
        const n = totalMonths;
        let emiValue = 0;
        let totalPayableValue = 0;
        let totalInterestValue = 0;

        if (r > 0) {
            emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            totalPayableValue = emiValue * n;
            totalInterestValue = totalPayableValue - loanAmount;
        } else {
            emiValue = loanAmount / n;
            totalPayableValue = loanAmount;
            totalInterestValue = 0;
        }

        setMonthlyEMI(emiValue.toFixed(0));
        setTotalPayable(totalPayableValue.toLocaleString('en-IN'));
        setTotalInterest(totalInterestValue.toLocaleString('en-IN'));
        updatePieChartData(loanAmount, totalInterestValue);
    };

    const updatePieChartData = (principal, interest) => {
        setPieChartData([
            { name: 'Principal', value: principal },
            { name: 'Interest', value: interest },
        ]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'loanAmount') {
            setLoanAmount(parseInt(value));
        } else if (name === 'loanDurationYears' && durationType === 'years') {
            setLoanDurationYears(parseInt(value));
        } else if (name === 'loanDurationMonths' && durationType === 'months') {
            setLoanDurationMonths(parseInt(value));
        } else if (name === 'interestRate') {
            setInterestRate(parseFloat(value));
        }
    };

    const toggleDurationType = (type) => {
        setDurationType(type);
    };

    const toggleHomeLoanDropdown = () => {
        setIsHomeLoanDropdownOpen(!isHomeLoanDropdownOpen);
    };

    const handleHomeLoanDropdownItemClick = (item) => {
        console.log(`${item} clicked`);
        setIsHomeLoanDropdownOpen(false);
    };

    const pieChartColors = ['#007bff', '#ffc107'];

    const homeLoanSubMenu = [
        'Loan Against Property',
        'Business Loan'
    ];

    const containerStyle = {
        marginTop: '5px',
        marginBottom: '5px',
    };

    const buttonStyle = {
        margin: '5px',
        fontSize: '0.9rem', 
        padding: '0.25rem 0.5rem', 
    };

    const dropdownToggleStyle = {
        ...buttonStyle,
    };

    const dropdownItemStyle = {
        fontSize: '0.9rem',
        padding: '0.25rem 0.5rem',
    };

    const resultBoxStyle = {
        backgroundColor: '#28a745',
        color: 'white',
        padding: '10px', 
        borderRadius: '0.25rem',
        textAlign: 'center',
        marginBottom: '10px', 
        fontSize: '0.9rem', 
    };

    const cardStyle = {
        padding: '10px', // Reduced padding
        border: '1px solid #dee2e6',
        borderRadius: '0.25rem',
    };

    const pieChartContainerStyle = {
        width: '100%',
        maxWidth: '180px', // Smaller pie chart
        height: 'auto',
    };

    const totalInterestPayableStyle = {
        fontWeight: 'bold',
        color: '#dc3545',
        marginTop: '40px', // Reduced margin
        fontSize: '0.9rem',
    };

    const inputLabelStyle = {
        fontSize: '0.9rem',
        marginBottom: '0.2rem',
    };

    const inputGroupTextStyle = {
        fontSize: '0.9rem',
    };

    const formControlStyle = {
        fontSize: '0.9rem',
        padding: '0.375rem 0.75rem',
    };

    const formRangeStyle = {
        fontSize: '0.8rem',
    };

    const smallTextStyle = {
        fontSize: '0.75rem',
    };

    return (
        
        <div className="container mt-3" style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '15px', paddingRight: '15px' }}>
            <div className="text-center mb-2">
                <h2>Emi-Calculator</h2>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="dropdown mx-1 mb-1" ref={homeLoanDropdownRef}>
                            {/* <button className="btn btn-light dropdown-toggle" type="button" onClick={toggleHomeLoanDropdown} aria-expanded={isHomeLoanDropdownOpen} style={dropdownToggleStyle}>
                                Home Loan
                            </button> */}
                            <ul className={`dropdown-menu ${isHomeLoanDropdownOpen ? 'show' : ''}} style={{ fontSize: '0.9rem' }`}>
                                {homeLoanSubMenu.map(item => (
                                    <li key={item}>
                                        <button className="dropdown-item" type="button" onClick={() => handleHomeLoanDropdownItemClick(item)} style={dropdownItemStyle}>
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <button className="btn btn-primary mx-1 mb-1" style={buttonStyle}>EMI Calculator</button>
                        <button className="btn btn-light mx-1 mb-1" style={buttonStyle} >Loan Eligibility Calculator</button>
                        <button className="btn btn-light mx-1 mb-1" style={buttonStyle}>Foreclosure Calculator </button>
                        <button className="btn btn-light mx-1 mb-1" style={buttonStyle}>Amortization Calculator </button>
                        <button className="btn btn-light mx-1 mb-1" style={buttonStyle}>Pre-Payment Calculator</button> */}
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="mb-2">
                        <label htmlFor="loanAmount" className="form-label" style={inputLabelStyle}>Loan amount</label>
                        <div className="input-group">
                            <span className="input-group-text" style={inputGroupTextStyle}>₹</span>
                            <input
                                type="number"
                                className="form-control"
                                id="loanAmount"
                                name="loanAmount"
                                value={loanAmount}
                                onChange={handleInputChange}
                                style={formControlStyle}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <small style={smallTextStyle}>₹5,00,000</small>
                            <small style={smallTextStyle}>₹5,00,00,000</small>
                        </div>
                        <input
                            type="range"
                            className="form-range"
                            min="500000"
                            max="50000000"
                            value={loanAmount}
                            onChange={handleInputChange}
                            name="loanAmount"
                            style={formRangeStyle}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="loanDurationYears" className="form-label" style={inputLabelStyle}>Loan duration</label>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="loanDurationYears"
                                name={durationType === 'years' ? "loanDurationYears" : "loanDurationMonths"}
                                value={durationType === 'years' ? loanDurationYears : loanDurationMonths}
                                onChange={handleInputChange}
                                style={formControlStyle}
                            />
                            <button
                                type="button"
                                className={`btn ${durationType === 'years' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                onClick={() => toggleDurationType('years')}
                                style={{ fontSize: '0.8rem', padding: '0.2rem 0.4rem' }}
                            >
                                Yr
                            </button>
                            <button
                                type="button"
                                className={`btn ${durationType === 'months' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                onClick={() => toggleDurationType('months')}
                                style={{ fontSize: '0.8rem', padding: '0.2rem 0.4rem' }}
                            >
                                Mo
                            </button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <small style={smallTextStyle}>1 Year</small>
                            <small style={smallTextStyle}>30 Years</small>
                        </div>
                        {durationType === 'years' && (
                            <input
                                type="range"
                                className="form-range"
                                min="1"
                                max="30"
                                value={loanDurationYears}
                                onChange={handleInputChange}
                                name="loanDurationYears"
                                style={formRangeStyle}
                            />
                        )}
                    
                        {durationType === 'months' && (
                            <input
                                type="range"
                                className="form-range"
                                min="1"
                                max="360"
                                value={loanDurationMonths}
                                onChange={handleInputChange}
                                name="loanDurationMonths"
                                style={formRangeStyle}
                            />
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="interestRate" className="form-label" style={inputLabelStyle}>Rate of interest</label>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="interestRate"
                                name="interestRate"
                                value={interestRate}
                                onChange={handleInputChange}
                                style={formControlStyle}
                            />
                            <span className="input-group-text" style={inputGroupTextStyle}>%</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <small style={smallTextStyle}>8.75% p.a</small>
                            <small style={smallTextStyle}>12% p.a</small>
                        </div>
                        <input
                            type="range"
                            className="form-range"
                            min="8.75"
                            max="12"
                            step="0.01"
                            value={interestRate}
                            onChange={handleInputChange}
                            name="interestRate"
                            style={formRangeStyle}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="bg-success text-white p-2 rounded text-center" style={resultBoxStyle}>
                        <h4>Monthly EMI</h4>
                        <h2>₹{monthlyEMI}*</h2>
                    </div>

                    <div className="mt-2" style={{ minHeight: '250px', padding: '10px', border: '1px solid #dee2e6', borderRadius: '0.25rem' }}>
                        <div className="d-flex flex-column align-items-center mb-2">
                            <div>
                                <p className="mb-1" style={{ fontWeight: 'bold', color: '#28a745', fontSize: '0.9rem' }}>Total Amount Payable</p>
                                <h4 className="mb-0" style={{ color: '#28a745', fontSize: '1rem' }}>₹{totalPayable}*</h4>
                            </div>
                            {pieChartData.length > 0 && (
                                <div style={{ width: '120px', height: '120px', marginTop: '10px' }}>
                                    <PieChart width={120} height={120}>
                                        <Pie
                                            data={pieChartData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={60}
                                            fill="#8884d8"
                                            dataKey="value"
                                            nameKey="name"
                                            label={false}
                                        >
                                            {pieChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}} fill={pieChartColors[index % pieChartColors.length]`} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                    <div style={{ fontSize: '0.7rem', textAlign: 'center' }}>
                                        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#007bff', marginRight: '3px' }}></span> Principal
                                        <br />
                                        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#ffc107', marginRight: '3px' }}></span> Interest
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <p className="mb-1" style={totalInterestPayableStyle}>Total Interest Payable</p>
                            <h4 className="mb-0" style={{ color: '#dc3545', fontSize: '1rem', }}>₹{totalInterest}*</h4>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                        <button className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Apply Now</button>
                    </div>
                    
                </div>
            
            </div>
        </div>
    );
}

export default HomeLoanCalculator;