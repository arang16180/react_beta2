
import React from 'react';
import { SuperContext01 } from './context2';
import { GlobalId01 } from './context2';
import "./deposit.css";


function Deposit(){
  const userslist01           = React.useContext(SuperContext01);
  const id_number01           = React.useContext(GlobalId01);
  const [amount, setAmount]   = React.useState("0");



function Increment(){
  if(!(isNaN(amount))&&(amount.trim()!="")){
      if(amount>0){
        userslist01.users[JSON.stringify(id_number01.number)].balance = Number(userslist01.users[JSON.stringify(id_number01.number)].balance)+Number(amount);
        setAmount(0);
        alert("Deposit is OK");
      }
      else if(amount==0){
        alert("Introduce an amount bigger than 0"); 
      }
      else{
        alert("The amount is negative");
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
<div class="card_dep">
    <br/>
    <h1 class="h1dep">Deposit</h1>
    <br/>
    <label>Amount to deposit</label>
    <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
    <small id="emailHelp" class="form-text text-muted">Enter the amount to deposit.</small>
    <br/>
    <button type="submit" disabled={!amount||(amount==0)} className="btn btn-light" onClick={Increment}>deposit</button>
    </div>
</div>
</div>


</>
  )
}
else{
  return(
  <>

  <div class="card">
  <div class="card-header">
  Total Balance:-
  </div>
  <div class="card-body">
  <div class="card_dep">
      <br/>
      <h1 class="h1dep">Log in first to deposit</h1>
      <br/>
      <label>Amount to deposit</label>
      <input type="input" disabled={true} className="form-control" id="deposit" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
      <small id="emailHelp" class="form-text text-muted">Enter the amount to deposit.</small>
      <br/>
      <button type="submit" disabled={true} className="btn btn-light" onClick={Increment}>deposit</button>
      </div>
  </div>
  </div>
  
  
  </> 

  );
}


}


export default Deposit;


