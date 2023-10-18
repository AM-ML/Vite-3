import { Book } from './Book.jsx'
import BooksDB from '../assets/BooksDB.json'

export function Books() {
	return (
        <div className='container'>
                <div className='row mb-3'>
                {BooksDB.map((book) => {
                        const {id, cover, title, desc, author} = book;

                        return <Book id={id}  cover={cover} title={title} desc={desc} author={author} />                                  
                        })}
                </div>
        </div>
        
	)
}
