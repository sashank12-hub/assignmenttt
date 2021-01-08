//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Checkoutcard from './checkoutcard';
import "./checkout.css"


class Checkout extends Component {
    render() {let{count,checkproducts}=this.props;
    console.log(count);
    console.log(checkproducts);
    
        return (
            <div className="">
           {count==0 && <div>
                <div className="checkout">
               
            <h1>ADD MORE PRODUCTS</h1>
            </div>
            </div>
        } 

 {checkproducts?.map(item=>{console.log(item)
     return <Checkoutcard  item={item}/> })} 
             </div>
        )
    }
}

const mapStatetoProps = (store) => ({
    count:store?.cart.length,
    checkproducts:store?.cart
    
})


export default connect(mapStatetoProps,null)(Checkout)
