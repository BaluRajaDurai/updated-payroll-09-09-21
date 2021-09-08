import React from 'react';
import Earnings from './Earnings';
export default function AnnualEarnings({alighTable}) {
  // const allMoney = Earnings.map(money => {
  //   return money.money;
  // });
  // const monthlyCtc = allMoney.reduce((a, b) => {
  //   return a + b;
  // });
  // const INR = money => {
  //   return new Intl.NumberFormat('en-IN').format(money);
  // };
  return (
    <>
    { alighTable &&
    <div style={{position:"absolute",left:"20%"}} className="container ms-5">
      <div>
      <div className="header-table d-flex p-2 bg-dark text-light justify-content-around">
      <div className="col"><h4>ID</h4></div>
      <div className="col"><h4>Name</h4></div>
      <div className="col"><h4>Jan 2018</h4></div>
      <div className="col"><h4>Feb 2018</h4></div>
      </div>
      {
        Earnings.map((data,id)=>{
          return (
            <div className="header-table d-flex p-2 bg-light text-dark justify-content-around">
              <div className="col"><h4>{id+1}</h4></div>
              <div className="col"><h4>{data.name}</h4></div>
              <div className="col"><h4>{data.money}</h4></div>
              <div className="col"><h4>{0}</h4></div>
             </div>
          );
        })
      
      }
    </div>
    </div>
    }
    { !alighTable && 
      <div>
      <div className="header-table d-flex p-2 bg-dark text-light justify-content-around">
      <div className="col"><h4>ID</h4></div>
      <div className="col"><h4>Name</h4></div>
      <div className="col"><h4>Jan 2018</h4></div>
      <div className="col"><h4>Feb 2018</h4></div>
      </div>
      {
        Earnings.map((data,id)=>{
          return (
            <div className="header-table d-flex p-2 bg-light text-dark justify-content-around">
              <div className="col"><h6>{id+1}</h6></div>
              <div className="col"><h6>{data.name}</h6></div>
              <div className="col"><h6>{data.money}</h6></div>
              <div className="col"><h6>{0}</h6></div>
             </div>
          );
        })
      
      }
    </div>
}
    </>
   
  );
}