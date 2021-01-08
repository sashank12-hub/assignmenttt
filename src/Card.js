import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Card.css";
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { let {item}=this.props;
    console.log(item)
        return ( 

                <div className="card">
                      
            <p className="title">{item.Title}</p>
                <img  className="image" src={item.Poster}/>
                <div className="footercard">

               
                <Link to ={{
                                pathname: `/moviedetails/:${item.imdbID}`,
                                id:item}}>DETAILS</Link>
               
              
                </div>
                
                </div>

         );
    }
}
 
export default Card;