import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Homepage from "./pages/Homepage";
import Enrollment from "./pages/Enrollment";
import About from "./pages/profile/About";
import Visi from "./pages/profile/Visi";
import Multimedia from "./pages/major/Multimedia";
import Rpl from "./pages/major/Rpl";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <AppNavbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/pendaftaran" exact component={Enrollment} />
        <Route path="/profile/about" exact component={About} />
        <Route path="/profile/visi" exact component={Visi} />
        <Route path="/major/multimedia" exact component={Multimedia} />
        <Route path="/major/rpl" exact component={Rpl} />
        <Route path="/auth/login" exact component={Login} />
        <Route path="/auth/register" exact component={Register} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
