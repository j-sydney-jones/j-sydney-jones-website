import React, { Component } from 'react'

import interviews from '../data/interviews.json';

export default class Interviews extends Component {
    render() {
        const Data = interviews;
        return (
            <div className="container">
                <p className="p-sm" />
                <h2>Interviews</h2>
                <p className="p-sm" />
                {Data.interviews.map(interview => {
                    return (
                        <div key={interview.title + interview.attr + interview.desc}>
                            <h4>{interview.title}</h4>
                            <h5>{interview.desc}</h5>
                            <h6>{interview.date}</h6>
                            <p className="attr-sm">{`— ${interview.attr}, `}<a href={interview.href} target="_blank" rel="noopener noreferrer">{interview.src}</a></p>
                            <p>{`${interview.prev}...`}</p>
                            <a className="btn" href={interview.more} target="_blank" rel="noopener noreferrer">Read more <i className="ion-ios-arrow-forward" /></a>
                            <p className="p-sm" />
                        </div>
                    );
                })}
            </div>
        )
    }
}
