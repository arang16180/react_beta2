import React from 'react';

function Boxes(props){


return(
    <>
    <div class="card">
  <div class="card-header bg-success">
  Name:{props.name_box}
  </div>
  <div class="card-body">
    <h5 class="card-title">Email:{props.email_box}</h5>
    <p class="card-text">Password:{props.pass_box}</p>
    <p class="card-text">Balance:{props.balance_box}</p>
  </div>
</div>
</>
);

}
export default Boxes;