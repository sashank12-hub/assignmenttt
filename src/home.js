import React, { Component } from 'react';
import Card from "./Card"
import "./home.css"
import axios from 'axios';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loader:true,
            movies:[]
         }
    }
    componentDidMount() {
        axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war').then(response=>{
            console.log()
            this.setState({movies:response.data.Search,loader:false})
        })
        
    }
    render() { let{loader,movies}=this.state;
    console.log(movies)
        return ( <div className ="home">

        {loader && <div>
        
          <h1>......loading</h1></div>}

    
        <div className="main">
        <div className="main_heading"> SEE OUR MOVIES</div>
        {movies?.map((item,index)=>{return <Card item={item}/>})}
        </div>
       </div> );
    }
}
 
export default Home;

