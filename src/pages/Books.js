import React, { Component } from 'react'

import books from '../data/books.json';

import BookItem from '../components/BookItem';

export default class extends Component {
    render() {
        const Data = books;
        return (
            <div className="container">
                <p className="p-sm" />
                <h2 className="center">Standalone Novels</h2>
                <p className="p-sm" />
                <div className="flex-container">
                    {Data.books.map(book => {
                        if (book.type ===  "standalone") {
                            return(
                                <BookItem href={`/books/${book.id}`} img={`${book.img}`} title={`${book.title}`} key={book.id}/>
                            );
                        }
                    })}
                </div>
                <h2 className="center">Viennese Mysteries</h2>
                <p className="p-sm" />
                <div className="flex-container">
                    {Data.books.map(book => {
                        if (book.type ===  "viennese") {
                            return(
                                <BookItem href={`/books/${book.id}`} img={`${book.img}`} title={`${book.title}`} key={book.id}/>
                            );
                        }
                    })}
                </div>
                <h2 className="center">Nonfiction</h2>
                <p className="p-sm" />
                <div className="flex-container">
                    {Data.books.map(book => {
                        if (book.type ===  "nonfiction") {
                            return(
                                <BookItem href={`/books/${book.id}`} img={`${book.img}`} title={`${book.title}`} key={book.id}/>
                            );
                        }
                    })}
                </div>
            </div>
        )
    }
}
