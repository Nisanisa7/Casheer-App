import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home, Login, History, Signup, HomeAdmin } from "../../page";
import LoginAdmin from "../../page/LoginAdmin";
import SignupAdmin from "../../page/SignupAdmin";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import PrivateRouteKasir from "./PrivateRouteKasir";
import Publicroute from "./publicroute";


const Routes = () => {
  return (
      <Router>
        <Switch>
            <Publicroute path="/login" component={Login}/>
            <Publicroute path="/signup" component={Signup}/> 
            
            <Publicroute path="/signin" component={LoginAdmin}/> 
            <Publicroute path="/signupadmin" component={SignupAdmin}/> 

            <PrivateRouteKasir path="/history" component={History}/> 
            <PrivateRouteKasir exact path="/" component={Home}/>

            <PrivateRouteAdmin path="/home" component={HomeAdmin}/> 
        </Switch>
      </Router>
  );
};

export default Routes;
