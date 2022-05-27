import React from 'react';
import db from "../firebase";
import {useEffect, useState} from "react";
import BookItem from "./BookItem";

function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        db.collection("books").onSnapshot(snapshot => setBooks(snapshot.docs.map((doc) => (({
            id: doc.id,
            ...doc.data()
        })))))
    }, [])
    console.log(books);
    return (
        <div className="bookList">

            <h2>책 목록</h2>

            {books.map((book) => (
                <BookItem book={book}/>
            ))}

        </div>
    );
}

export default BookList;