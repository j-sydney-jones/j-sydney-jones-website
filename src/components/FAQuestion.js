import React, { Component } from 'react'

export default class FAQuestion extends Component {
    render() {
        return (
            <div>
                <h4>{"Q: " + this.props.q}</h4>
                <p>{"A: " + this.props.p1}</p>
                <p>{this.props.p2}</p>
                <p>{this.props.p3}</p>
                <p className="p-sm" />
            </div>
        )
    }
}
