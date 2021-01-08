import React, { Component } from 'react';
import "./Header.css";
import {BrowserRouter, Link, Route, Switch,useHistory} from "react-router-dom";
import { connect } from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let{count}=this.props;
        return ( <div className="header">
        
        <div className="image">
        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"/>

        </div>
       
        <div className="navbar">
            <ul className="list">

            
            <li className="linkk" ><Link to="/assignment4" >HOME</Link> </li>
            
            <li className="linkk" ><Link to="/assignment4/about" >ABOUT</Link> </li>
            <li className="linkk" ><Link to="/assignment4/checkout" >CHECKOUT</Link> </li>
            <li className="linkk cartcount" >
            <div>
            <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg></div>
          <p className="count">{count}</p>
           
            </div>
            
            </li>
            
           

            </ul>
        
        </div>
        </div> );
    }
}


const mapStatetoProps=(store)=>({
    count:store?.cart.length,
    cartproducts:store?.cart
})
export default connect(mapStatetoProps)( Header);
