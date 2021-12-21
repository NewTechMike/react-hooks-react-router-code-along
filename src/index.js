import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//1. import react-router function
import App from "./components/App"

//Add NavBar component to our render
ReactDOM.render(
  <BrowserRouter> 
   <App />
  </BrowserRouter>, 
  document.getElementById("root")
);
