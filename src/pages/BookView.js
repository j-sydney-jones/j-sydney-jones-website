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
                    <a className="btn amzn" href={currentBook.amzn} target="_blank" rel="noopener noreferrer"><i className="fab fa-amazon"></i> Buy on Amazon</a>
                );
            } else {
                return null;
            }
        }

        function BandNButton() {
            var available = true;
            currentBook.ban === "" ? available = false : available = true;
            if (available) {
                return (
                    <a className="btn ban" href={currentBook.ban} target="_blank" rel="noopener noreferrer">Buy on Barnes & Noble</a>
                );
            } else {
                return null;
            }
        }

        function AppleButton() {
            var available = true;
            currentBook.apl === "" ? available = false : available = true;
            if (available) {
                return (
                    <a className="btn apl" href={currentBook.apl} target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i> Buy on iBooks</a>
                );
            } else {
                return null;
            }
        }
        
        return (
            <div className="container">
                <p className="p-sm" />
                


                <div id="book-view-image">
                    <p className="p-sm" />
                    <img src={require(`../assets/images/${currentBook.img}`)} alt={currentBook.id} className="book-cover"/>
                    <p className="p-sm" />
                </div>
                <div id="book-view-text">
                    <h2>{currentBook.title}</h2>
                    <p>{currentBook.summary}</p>
                    <p><AmazonButton /></p>
                    <p><AppleButton /></p>
                    <p><BandNButton /></p>
                </div>
                <div style={{clear: "both"}}>
                <p className="p-sm" />
                
                <h3>{`Reviews of `}<i>{`${currentBook.title}`}</i></h3>
                <p className="p-sm" />
                {currentBook.reviews.map(review => {
                    return(
                        <div key={Math.random()}>
                            <p className="quote-sm">{`"${review.review}"`}</p>
                            <p className="attr-sm">{`—${review.attr}`}</p>
                            <a className="btn" target="_blank" rel="noopener noreferrer" href={review.href}>View source <i className="ion-ios-arrow-forward" /></a>
                            <hr />
                        </div>
                    );
                })}
                </div>
                
                
            </div>
        )
    
    
}
}



