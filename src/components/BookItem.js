import React, { Component } from 'react';

//**PROPS: href, img, title */

export default class BookItem extends Component {
    render() {
        return (
            <div style={{ margin: "0rem 2rem 2rem 2rem", zIndex: 1 }} >
                <a href={this.props.href} >
                    <img className="book-item" src={require(`../assets/images/${this.props.img}`)} alt={this.props.title} style={{ width: "11rem" }} />
                    <p className="book-item-title" style={{ maxWidth: "11rem" }}>{this.props.title}</p>
                </a>
            </div>
        );
    }
}
