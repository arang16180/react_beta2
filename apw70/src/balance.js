
import React from 'react';
import { SuperContext01 } from './context2';
import { GlobalId01 } from './context2';
import "./balance.css";

function Balance(){
  const level       = React.useContext(SuperContext01);
  const id_number01 = React.useContext(GlobalId01);


if(id_number01.number!=0){
  return (

    <>

<div class="card">
  <div class="card-header">
  Balance
  </div>
  <div class="card-body">
  <br/>
    <div class="card_bal">
    <h1 class="h1bal">Balance</h1><br/>
    <label class="label_bal">Current balance: {level.users[id_number01.number].balance}</label>
    <br/><br/><br/>
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
  Balance
  </div>
  <div class="card-body">
  <br/>
    <div class="card_bal">
    <h1 class="h1bal">Log in first to access your balance</h1><br/>
    <label class="label_bal">Current balance: {level.users[id_number01.number].balance}</label>
    <br/><br/><br/>
    </div>
  </div>
</div>
    </>
  )
}
}


export default Balance;