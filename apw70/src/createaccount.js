
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
//import './index.css';
import './context.js';
import Home from './home.js';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Withdraw from './withdraw'
import Balance from './balance'
import NavBar from './navbar';
import Card from './context.js';
import ctx2 from './index.js'
import './createaccount.css'
import { SuperContext01 } from './context2';
import { GlobalId01 } from './context2';

//const UserContext = React.createContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});

//UserContext.Provider ={};
//const ctx = React.useContext(ctx2);


function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx         = React.useContext(SuperContext01);//apparently react context can only be called inside a function
  const id_number01 = React.useContext(GlobalId01);
  //const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){


    let push_id = ctx.users.length;
    console.log(name,email,password);
    if (!validate(name,     'name')){
      alert("Introduce Name");   
      return;
    }
    if (!validate(email,    'email')){
      alert("Introduce Email");   
      return;
    }
    if (!validate(password, 'password')){ 
      alert("Introduce Password");   
      return;
    }
    else if(password.length<8){
      alert("Password must have at least 8 characters");   
      return;
    }
    ctx.users.push({name,email,password,balance:100,id:push_id});
    alert("Account created correctly");
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div class="card01">
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit"  disabled={!name||!email||!password} className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}

            
    />
    </div>
  )
  
}

export default CreateAccount;