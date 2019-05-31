import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <p className="p-sm" />
        <h1 className="quote-lg">
          "Jones is one of the Jewels of the hisotical mystery scene."
        </h1>
        <p className="p-sm" />
        <p className="attr-lg">&mdash; San Francisco Book Review</p>
        <p className="p-sm" />

        <div className="card">
          <div className="card-body">
            <h2>About the author</h2>
          </div>
        </div>
      </div>
    );
  }
}
