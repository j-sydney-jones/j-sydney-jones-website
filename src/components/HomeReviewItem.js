import React, { Component } from "react";

export default class HomeReviewItem extends Component {
    render() {
        return (
            <div>
                <p className="quote-sm">{`${this.props.rev}...`}</p>
                <p className="attr-sm">
                    {`— `}
                    {this.props.attr}
                </p>
                <p className="p-sm" />
            </div>
        );
    }
}
