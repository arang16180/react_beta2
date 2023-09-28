import { SuperContext01 } from './context2';
import React from 'react';
import Boxes from './boxes.js';


function AllData(){
  //const ctx = React.useContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});
  //<Boxes name_box="asdf0" email_box="asdf1" pass_box="asdf2" balance_box="asdf3"/>
  const level3 = React.useContext(SuperContext01);
  let data_boxes =[...level3.users];
  data_boxes.shift();
  const array1 =[{name:"a1"},{name:"a2"}];

  return (
    <>
    {/*JSON.stringify(level3.users)*/}<br/>
    {data_boxes.map(({name,email,password,balance})=>(<Boxes name_box={name} email_box={email} pass_box={password} balance_box={balance}/>))}
    </>
  );
}

export default AllData;