import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import './index.css';
import './context.js';
import Home from './home.js';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Withdraw from './withdraw'
import Balance from './balance'
import CreateAccount from './createaccount'
import Deposit from './deposit';
import NavBar from './navbar';
import Login_A from './login';
import AllData from './alldata';
import Logout from './logout';

//const Route       = ReactRouterDOM.Route;
//const Link        = ReactRouterDOM.Link;
//const HashRouter  = ReactRouterDOM.HashRouter;


const root = ReactDOM.createRoot(document.getElementById('root'));


function Spa() {
  return (

      
      <HashRouter>
      <NavBar/>
<Routes>
    <Route index Component={App} />
    <Route exact path="/home/" Component={Home} />
    <Route exact path="/login/" Component={Login_A} />
    <Route exact path="/deposit/" Component={Deposit} />
    <Route exact path="/withdraw/" Component={Withdraw} />
    <Route exact path="/balance/" Component={Balance}/>
    <Route exact path="/createaccount/" Component={CreateAccount} />
    <Route exact path="/alldata/" Component={AllData} />
    <Route exact path="/logout/" Component={Logout} />





</Routes>
</HashRouter>
     
 
  );
}


root.render(
<React.StrictMode>
    <Spa />
    </React.StrictMode>
);

/*ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//export default ctx2;
