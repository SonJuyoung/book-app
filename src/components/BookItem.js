import React from 'react';

function BookItem({book}) {
    return (
        <div className="book-item">
            <br/>
            <span><strong>책 제목: {""}</strong> {book.title}</span>
            <br/>
            <span><strong>페이지 수: {""}</strong>{book.pages}</span>
            <br/>
            <span><strong>출판일: {""}</strong>{new Date(book.publishDate.toDate()).toLocaleDateString()}</span>
        </div>
    );
}

export default BookItem;