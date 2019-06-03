import React, { Component } from 'react'
import $ from 'jquery';

import '../css/footer.css';

import SocialMediaIcon from './SocialMediaIcon';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <p className="p-sm" />
                    <button className="btn" onClick={this.scrollToTop}>Back to top &uarr;</button>
                    <p className="p-sm" />
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-md">
                            <h3>J. Sydney Jones</h3>
                            <hr className="footer-hr" />
                        </div>
                        
                        <div className="col-md">
                            <h3>Navigation</h3>
                            <div className="flex-container" style={{justifyContent: "left", marginLeft: "-15px"}}>
                                <a className="nav-link" href="/">Home</a>
                                <a className="nav-link" href="/about">About</a>
                                <a className="nav-link" href="/books">Books</a>
                                <a className="nav-link" href="/interviews">Interviews</a>
                                <a className="nav-link" href="/faq">FAQ</a>
                            </div>
                            
                            <hr className="footer-hr" />
                        </div>
                        <div className="col-md">
                            <h3>Contact</h3>
                            <div className="flex-container " style={{ justifyContent: "left", }}>
                                <SocialMediaIcon icon={"fab fa-facebook-square"} href="https://www.facebook.com/J-Sydney-Jones-Author-226721169288/" nt={true}/>
                                <SocialMediaIcon icon={"fas fa-envelope-square"} href="mailto:syd@jsydneyjones.com" nt={false}/>
                                <SocialMediaIcon icon={"fab fa-wordpress"} href="https://jsydneyjones.wordpress.com/" nt={true}/>
                            </div>
                            <hr className="footer-hr" />
                        </div>
                    </div>
                    <div className="row">
                        <p>Copyright &copy; 2019 J. Sydney Jones, Author. All rights reserved. </p>
                    </div>
                    <div className="row">
                        <p>2019 website development by Evan Jones</p>
                    </div>
                </div>
            </div>
        )
    }

    scrollToTop = () => {
        $("html, body").animate({ scrollTop: 0 }, 500);
    }
}
