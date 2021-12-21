import React from "react";
import { Route, Switch } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
import Message from "./Message"
import SignUp from "./Signup"
import NavBar from "./NavBar"

//2. Change so router is coordinating what is display
function App(){
return (
  <div>
    <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path ="/">
          <Home />
        </Route>
      </Switch>
  </div>
  );
}

export default App;