import React, { Component } from 'react'

//**PROPS: href, img, title */

export default class BookItem extends Component {
    render() {
        return (
            <div style={{margin: "0rem 2rem 0rem 2rem"}} >
                <a href={this.props.href} >
                    <img className="book-item" src={require(`../assets/images/${this.props.img}`)} alt={this.props.title} style={{maxWidth: "11rem"}}/>
                    <p className="book-item-title">{this.props.title}</p>
                </a>
            </div>
        )
    }
}
