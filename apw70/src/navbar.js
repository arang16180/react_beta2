import './navbar.css';
import { GlobalId01 } from './context2';
import React from 'react';
import { useHref } from 'react-router-dom';
import { SuperContext01 } from './context2';

function NavBar(){

const userslist01 = React.useContext(SuperContext01); 
const id_number01 = React.useContext(GlobalId01);
const [pre_dialog, setPre_dialog] = React.useState('');

function logout(){
alert("successfully log out");
id_number01.number = 0;
}

function f_mouse(var1){
setPre_dialog(var1);
}


  return(
    <>
    <h1 class="p_nav3">- WELCOME TO THE FUTURE -</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Home info")} onMouseOut={()=>setPre_dialog("")} href="#/home/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Here you can log in")} onMouseOut={()=>setPre_dialog("")} href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Deposit info")} onMouseOut={()=>setPre_dialog("")} href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Withdraw info")} onMouseOut={()=>setPre_dialog("")} href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Balance info")} onMouseOut={()=>setPre_dialog("")} href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Here you can create an account")} onMouseOut={()=>setPre_dialog("")} href="#/createaccount/">Create Account</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("All data info")} onMouseOut={()=>setPre_dialog("")} href="#/alldata/">All Data</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" onMouseOver={()=>setPre_dialog("Here you can log out")} onMouseOut={()=>setPre_dialog("")} href="#/logout/" onClick={logout} >Logout</a>
            
          </li>  
          <br/>
                 
        </ul>
      </div>
      <p class="p_nav_2">{"welcome:"+userslist01.users[id_number01.number].name}</p>

    </nav>
    <p class="p_nav">{pre_dialog}</p>
    </>
  );
}

export default NavBar;