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
                        <div className="col">
                            <h3>J. Sydney Jones</h3>
                        </div>
                        <div className="col">
                            <h3>Navigation</h3>
                            <p>Navigation items go here.</p>
                        </div>
                        <div className="col">
                            <h3>Contact</h3>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignContent: "flex-start"}}>
                                <SocialMediaIcon icon={"fab fa-facebook-square"} href="https://www.facebook.com/J-Sydney-Jones-Author-226721169288/" nt={true}/>
                                <SocialMediaIcon icon={"fas fa-envelope-square"} href="mailto:syd@jsydneyjones.com" nt={false}/>
                                <SocialMediaIcon icon={"fab fa-wordpress"} href="https://jsydneyjones.wordpress.com/" nt={true}/>
                            </div>
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
