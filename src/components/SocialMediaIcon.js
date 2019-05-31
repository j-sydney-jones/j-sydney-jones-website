import React, { Component } from 'react'

export default class SocialMediaIcon extends Component {
    render() {
        return (
            <div style={{margin: "0 0.5rem 0 0.5rem"}}>
                <a href={this.props.href} target={`${this.props.nt === true ? "_blank" : "_self"}`} rel="noopener noreferrer">
                    <i className={this.props.icon} style={{fontSize: "2rem"}}/>
                </a>
            </div>
        )
    }
}
