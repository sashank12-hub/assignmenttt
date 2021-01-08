import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./checkoutcard.css";
import {remove} from "./actions/action"
class Checkoutcard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {let{item,removeProductfromoCart}=this.props 
        return (<div className="detailss">
        <div className="image11">
        <img src={item.Poster}/>
        </div>
        <div className="bodyy">
        <h2>Title:{item.Title}</h2>
        <p>Year of release : {item.Year}</p>
        <div> <button className="btnn" onClick={()=>removeProductfromoCart(item)
            }>Remove from CART</button>
        </div>
        
        </div>
    
    
    

    </div>  );
    }
}
const mapDispatchToProps=(dispatch)=>({
    removeProductfromoCart:(item)=>dispatch(remove(item))
})
export default connect(null,mapDispatchToProps)(Checkoutcard);