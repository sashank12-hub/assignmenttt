import Header from "./Header"
import './App.css';
import Home from "./home";
import About from "./About"
import Moviedetails from "./moviedetails"
import React, { Component } from 'react';
import {createBrowserHistory} from "history"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Checkout from "./checkout";



// const cumstumHistory=createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <>
      <BrowserRouter >
      
    
      <Header  />
     
      
      <Switch>
      <Route exact path="/assignment4" component={Home  } />
      <Route exact path="/assignment4/checkout" component={Checkout}/>
      <Route exact path="/assignment4/about" component={About  } />
      <Route exact path="/assignment4/moviedetails/:id" render={(props)=><Moviedetails {...props}/>
      }
      />
     
     
     
     </Switch>
     </BrowserRouter>
    </> );
  }
}
 
export default App;


