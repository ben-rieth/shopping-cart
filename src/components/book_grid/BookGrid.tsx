import { useState } from 'react';
import Book from '../../services/types/Book';
import Button from './../button/Button';
import BookDisplay from './../../components/book_display/BookDisplay';

type BookGridProps = {
    books: Book[]
}

const BookGrid = ({books} : BookGridProps) => {

    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const onBookClick = (book: Book) => {
        setSelectedBook(book);
    }

    return (
        <div className="grid grid-cols-2 m-4">
            {books.map((book) => {
                return <BookDisplay key={book.title} book={book} onClick={() => onBookClick(book)}/>
            })}
            {selectedBook ? 
                <div className="px-4 py-2 col-span-full row-start-2 row-end-3 outline outline-1 outline-slate-300">
                    <p className="font-bold">{selectedBook.title}</p>
                    <div className="flex justify-around items-center">
                        <img src={selectedBook.imageURL} alt="cover" className="w-24"/>
                        <div className="flex flex-col">
                            <p>{selectedBook.price}</p>
                            <Button text="Add to Cart" />
                        </div>
                    </div>
                </div> : ""}
        </div>
    );
}

export default BookGrid;