import React, { useState } from 'react';
import SalaryStructure from './SalaryStructure';
import AnnualEarnings from './AnnualEarnings';
export default function Payslip() {
  const [toggle, setToggle] = useState(true);
  const togglebtn = toggle ? 'Tax Worksheet →' : '← Payslip';
  return (
    <div className="payslip p-4">
      <div className="payslip-header d-flex justify-content-around">
        <div className="company-wrappe1r d-flex">
          <img
            width="35%"
            src="https://www.tutorialchip.com/wp-content/uploads/2012/08/Technology-Lab.jpg"
            alt="company-logo"
          />
          <div className="company-details mt-5">
            <h5>Technology Labs</h5>
            <h6>
              15 SunCity Gloria,
              <br />
              HSR Layout,
              <br />
              Banglore{' '}
            </h6>
          </div>
        </div>
        <div className="payslip-details">
          <button onClick={() => setToggle(!toggle)} className="btn btn-light">
            {togglebtn}
          </button>
          <h5>Payslip</h5>
          <h6>For the month of December</h6>
        </div>
      </div>
      <hr />
      <div className="user-details d-flex justify-content-around my-4">
        <div className="username">
          <h5>Empolyee Name</h5>Shakthi
        </div>
        <div className="designation">
          <h5>Designation</h5>Full Stack
        </div>
        <div className="netpay">
          <h5>Net Pay</h5>7,20,000
        </div>
      </div>
      {toggle ? <SalaryStructure hideStat={false} /> : <AnnualEarnings alighTable={false} />}
    </div>
  );
}