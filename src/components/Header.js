import React, { Component } from 'react'
import '../css/header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={require("../assets/images/banner.png")} style={{position: "absolute", top: "0"}}/>
                <div className="card-img-overlay">
                    <h1>J. Sydney Jones</h1>
                    <p>Subtitle goes here, subtitle goes here, subtitle goes here.</p>
                </div>
                
            </div>
        )
    }
}

