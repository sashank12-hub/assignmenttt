import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./moviedetails.css";
import { add } from './actions/action';

class Moviedetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { let{location,addProductToCart}=this.props;
        
        console.log(location.id);
       
        return ( <div className="details">
        <div className="image1">
        <img src={location.id.Poster}/>
        </div>
        <div className="body">
        <h2>Title:{location.id.Title}</h2>
        <p>Year of release : {location.id.Year}</p>
        <div> <button className="btn" onClick={()=>
            addProductToCart(location)}>ADD TO CART</button>
        </div>
        
        </div>
    
    
    

    </div>
 );
    }
}


const mapDispatchToProps=(dispatch)=>({
    addProductToCart:(location)=>dispatch(add(location.id))
})
 
export default connect(null,mapDispatchToProps) (Moviedetails);
