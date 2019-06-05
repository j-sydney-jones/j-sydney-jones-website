import React, { Component } from 'react'

import reviews from '../data/reviews.json';

export default class Reviews extends Component {
    render() {
        const Data = reviews;
        
        // function ReadMoreButton() {
        //     if (reviews.reviews.more === "") {
        //         return (
        //             <a className="btn" href={reviews.reviews.more} target="_blank" rel="noopener noreferrer">Read more <i className="ion-ios-arrow-forward" /></a>
        //         );
        //     } else {
        //         return null;
        //     }
        // }
        
        return (
            <div className="container">
                <p className="p-sm" />
                <h2>Reviews</h2>
                <p className="p-sm" />
                {Data.reviews.map(review => {
                    return (
                        <div key={review.title + review.attr + review.desc}>
                            <h4>{review.title}</h4>
                            <h6>{review.date}</h6>
                            <p className="attr-sm">{`— `}<a href={review.href} target="_blank" rel="noopener noreferrer">{review.src}</a></p>
                            <p>{`${review.prev}...`}</p>
                            {review.more === "" ? (
                                null
                            ) : (
                                <a className="btn" href={review.more} target="_blank" rel="noopener noreferrer">Read more <i className="ion-ios-arrow-forward" /></a>
                            )
                            }
                            <p className="p-sm" />
                        </div>
                    );
                })}
            </div>
        )
    }
}



