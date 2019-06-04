import React, { Component } from 'react'
import '../css/header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header-img" src={require("../assets/images/banner.png")} />
                <div className="card-img-overlay">
                    <h1>J. Sydney Jones</h1>
                    <p><b>Author of historical mysteries and thrillers</b></p>
                </div>
                
            </div>
        )
    }
}

