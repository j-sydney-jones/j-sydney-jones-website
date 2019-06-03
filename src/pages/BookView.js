import React, { Component } from 'react'

import books from "../data/books.json";

export default class BookView extends Component {
    render() {
        const Data = books;
        const currentBook = Data.books.find(book => book.id === this.props.match.params.id);
        
        console.log(currentBook);
        function AmazonButton() {
            var available = true;
            currentBook.amzn === "" ? available = false : available = true;
            if (available) {
                return (
                    <a className="btn amzn"><i class="fab fa-amazon"></i> Buy on Amazon</a>
                );
            } else {
                return null;
            }
        }
        
        return (
            <div className="container">
                <p className="p-sm" />
                <div className="row">
                    <div className="col-sm-3">
                        <img src={require(`../assets/images/${currentBook.img}`)} alt={currentBook.id} style={{maxWidth: "100%"}}/>
                    </div>
                    <div className="col-sm-9">
                        <h2>{currentBook.title}</h2>
                        <p>{currentBook.summary}</p>
                        <AmazonButton />
                    </div>
                </div>
                <p className="p-sm" />
                <h3>Reviews</h3>
                <p className="p-sm" />
                {currentBook.reviews.map(review => {
                    return(
                        <div>
                            <p className="quote-sm">{`"${review.review}"`}</p>
                            <p className="attr-sm">{`—${review.attr}`}</p>
                            <a className="btn" target="_blank" href={review.href}>View source &rarr;</a>
                            <hr />
                        </div>
                    );
                })}
                
                
                
            </div>
        )
    
    
}
}



