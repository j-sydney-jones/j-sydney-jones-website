import React, { Component } from 'react'

export default class FAQuestion extends Component {
    render() {
        return (
            <div>
                <h4>{"Q: " + this.props.q}</h4>
                <p>{"A: " + this.props.a}</p>
                <p className="p-sm" />
            </div>
        )
    }
}
