
import React from 'react';
import { SuperContext01 } from './context2';
import { GlobalId01 } from './context2';
import "./balance.css";

function Logout(){
  const id_number01 = React.useContext(GlobalId01);



  return (

    <>
<div class="card">
  <h5 class="card-header">Logout</h5>
  <div class="card-body">
  <br/>
    <div class="card_bal">
    <h1 class="h1bal">You are successfully logout</h1><br/>
    </div>
  </div>
</div>
    </>

  )
}


export default Logout;