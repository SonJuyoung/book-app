import './App.css';
import {useEffect, useState} from "react";
import db from "./firebase";
import BookList from "./components/BookList";
import Button from "./ui/Button";
import Message from "./ui/Message";

function App() {

    const [bookTitle, setBookTitle] = useState("");
    const [bookPage, setBookPage] = useState("");
    const [bookPublish, setBookPublish] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleBook = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await db.collection('books').add({
                title : bookTitle,
                pages : parseInt(bookPage),
                publishDate : new Date(bookPublish)
            })
                .then((res)=> {
                    (console.log(res))
                })
        }catch (e) {
                setError("에러가 발생했습니다.")
        }

        setBookTitle("");
        setBookPage("");
        setBookPublish("");
        setLoading(false);
    }

    return (
        <div className="App">
            <h1>hi</h1>
            <form>

                <div>
                    <label htmlFor="book-title">제목</label>
                    <input type="text" name="name" id="book-title" value={bookTitle} placeholder="제목" onChange={(e)=> {
                        setBookTitle(e.target.value)
                    }}/>
                </div>

                <div>
                    <label htmlFor="book-pages">페이지 수</label>
                    <input type="number" name="pages" id="book-pages" value={bookPage} placeholder="페이지 수" onChange={(e)=> {
                        setBookPage(e.target.value)
                    }}/>
                </div>

                <div>
                    <label htmlFor="book-publish-date">출판일</label>
                    <input type="date" name="publish-date" id="book-publish-date" value={bookPublish} placeholder="출판일" onChange={(e)=> {
                        setBookPublish(e.target.value)
                    }}/>
                </div>

                <Button type="submit" onClick={handleBook} disabled={loading}>{loading ? "저장 중입니다..." : "저장하기"}</Button>

            <Message error={error} type="error"/>
            </form>

            <BookList/>
        </div>
    );
}

export default App;
