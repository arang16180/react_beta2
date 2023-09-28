

import React from 'react';
import { SuperContext01 } from './context2';
import { GlobalId01 } from './context2';
import './login.css';
import NavBar from './navbar';


function Login_A(){


  const [email_login, setEmail_login]       = React.useState('');
  const [password_login, setPassword_login] = React.useState('');
  const [status01, setStatus01]       = React.useState('Current user:');

  const id_number01 = React.useContext(GlobalId01);
  const userslist01 = React.useContext(SuperContext01);

  function checkUser(){

    if(email_login.trim()==""){
      alert("introduce email"); 
      return;
    }
    else if(password_login.trim()==""){
      alert("introduce password"); 
      return;
    }



  for(let i = 0;i < userslist01.users.length;i++){
  if(email_login == userslist01.users[i].email && password_login == userslist01.users[i].password){
  setStatus01('You are log in now:');
  setEmail_login('');
  setPassword_login('');
  alert("You are now log in");
  id_number01.number = i;
  }
  else if(i==userslist01.users.length-1){
  alert("Wrong credentials"); 
  }

  }

  }



  return (
<>
  <div class="card">
    <div class="card-header">
    Log in
    </div>
      <div class="card-body">
        <div class="card_log">
        <br/>
        <h1 class="h1log">Login</h1>
        <br/>

        <form>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email_login} onChange={e => setEmail_login(e.currentTarget.value)}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password_login} onChange={e => setPassword_login(e.currentTarget.value)}></input>
        </div>
        </form>
        <br/>
        <button type="submit" class="btn btn-light" onClick={checkUser}>Submit</button>
        <br/>
        <p class="plog">{/*Your number id is: {JSON.stringify(id_number01.number)+" "}{status01}*/}</p><br/>
        <p class="plog">{status01+userslist01.users[id_number01.number].name}</p><br/>
        
      </div>
    </div>
  </div>
</>
  )  
}


export default Login_A;