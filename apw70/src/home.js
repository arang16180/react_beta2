import React from 'react';
import Card from './context.js';
import ReactDOM from 'react-dom';
import { Outlet, Link } from "react-router-dom";
import "./home.css"

function Home(){

  return (
    <>
    <div class="homestyle">
    <Card
      txtcolor="white"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(
      <>  
      <img src={require('./circle1.png')} className="img-fluid" alt="Responsive image" width="180" height="180"  />
      <img src={require('./circle2.png')} className="img-fluid2" alt="Responsive image" width="180" height="180"  />
      </>
      )} />
      <>
       
        <Outlet />
      </>
      </div>



      
      </>
    
  );   
}


export default Home;