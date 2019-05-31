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

        <div classname="row">
          <div className="col-lg-7">
            <div className="card shd-lg">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <img src={require("../assets/images/sydjones3.jpg")} style={{width: "100%", maxWidth: "256px", marginRight: "auto", marginLeft: "auto", display: "block"}}/>
                    <p className="p-sm" />
                  </div>
                  <div className="col-sm-7">
                    <h2>About the author</h2>
                    <p>
                      The author of travel guides, biographies, and thrillers
                      and mysteries for adults, J. Sydney Jones pursues a
                      central theme in all of his work: illumination of the past
                      in order to cast light on the present. In his thrillers as
                      well as his works of nonfiction, the emphasis is on
                      historical insight.
                    </p>
                    <p>
                      Born on afarm in northeastern South Dakota, Jones is one
                      of four siblings. With the death of his father when Jones
                      was five, the family moved to Oregon, where Jones grew up
                      a small coastal town. He attended university in Oregon,
                      and then studied abroad, an experience that changed his
                      life and made him want to become a writer.
                    </p>
                    <a className="btn" href="/about">
                      Read more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card shd-lg">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
