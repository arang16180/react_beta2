import React from 'react';
import { SuperContext01 } from './context2';
import { GlobalId01 } from './context2';
import "./withdraw.css";


function Withdraw(){
  const userslist01           = React.useContext(SuperContext01);
  const id_number01           = React.useContext(GlobalId01);
  const [amount, setAmount]   = React.useState("0");



function Reduce(){
  if(!(isNaN(amount))&&(amount.trim()!="")){
    if(amount>0){
        if(amount<=userslist01.users[JSON.stringify(id_number01.number)].balance){
        userslist01.users[JSON.stringify(id_number01.number)].balance = Number(userslist01.users[JSON.stringify(id_number01.number)].balance)-Number(amount);
        setAmount(0);
        alert("Withdraw is OK");
        }
        else{
        setAmount(0); 
        alert("Amount bigger than balance");
        }
    }
    else{
      alert("Introduce an amount bigger than 0"); 
    }
  }
  else{
  alert("Please introduce a number"); 
  }
}

if(id_number01.number!=0){
  return (
<>

    
  <div class="card">
  <div class="card-header">
  Total Balance:{userslist01.users[JSON.stringify(id_number01.number)].balance}
  </div>
  <div class="card-body">
  <div class="card_withdraw">
    <br/>
    <h1 class="h1withdraw">Withdraw</h1>
    <br/>
    <label>Amount to withdraw</label>
    <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
    <small id="emailHelp" class="form-text text-muted">Enter the amount to withdraw.</small>
    <br/>
    <button type="submit" disabled={!amount||(amount==0)} className="btn btn-light" onClick={Reduce}>withdraw</button>
    </div>
  </div>
  </div>


  </> 

    )
  }
  else{
    return (
      <>
      
          
        <div class="card">
        <div class="card-header">
        Total Balance:-
        </div>
        <div class="card-body">
        <div class="card_withdraw">
          <br/>
          <h1 class="h1withdraw">Log in first to withdraw</h1>
          <br/>
          <label>Amount to withdraw</label>
          <input type="input" disabled={true} className="form-control" id="withdraw" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
          <small id="emailHelp" class="form-text text-muted">Enter the amount to withdraw.</small>
          <br/>
          <button type="submit" disabled={true} className="btn btn-light" onClick={Reduce}>withdraw</button>
          </div>
        </div>
        </div>
      
      
        </> 
      
          )
  }


}

export default Withdraw;