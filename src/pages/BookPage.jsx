import { useParams } from "react-router-dom";
import BooksDB from '../assets/BooksDB.json';
import { useEffect, useState } from "react";
import { BookComponent } from "./BookComponent";

export function BookPage(props){
    const { bookId } = useParams();
    
    let [bookTitle, setBookTitle] = useState("");
    let [bookCover, setBookCover] = useState("");
    let [bookDesc, setBookDesc] = useState("");
    let [bookAuthor, setBookAuthor] = useState("");
    const [found, setFound] = useState(false);

    const fetchBook = () => {
        BooksDB.forEach(book => {
            const {id, cover, title, desc, author} = book;
    
            if (parseInt(id) === parseInt(bookId)) { // Ensure bookId and id are of the same type (both integers)
                setBookCover(book.cover);
                setBookTitle(book.title); 
                setBookDesc(book.desc);
                setBookAuthor(book.author);
                setFound(true);
            }
            
        })
    }

    useEffect(() => {
        fetchBook();
    }, [])
    
    return (
        <div className="container">
            <div className="row">

                {!found ? <h1>Book Not Found.</h1> : <BookComponent id={parseInt(bookId)} cover={bookCover} title={bookTitle} desc={bookDesc} author={bookAuthor} />}
            </div>
        </div>
    )
}
