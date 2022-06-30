import { useState } from 'react';
import Book from '../../services/types/Book';
import BookDisplay from './../../components/book_display/BookDisplay';
import SelectedBookDisplay from './../../components/selected_book_display/SelectedBookDisplay';

type BookGridProps = {
    books: Book[]
}

const BookGrid = ({books} : BookGridProps) => {

    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const onBookClick = async (book: Book) => {
        setSelectedBook(null);

        setTimeout(() => setSelectedBook(book), 700);
    }

    return (
        <div className="grid grid-cols-2 auto-rows-min m-4">
            {books.map((book, index) => {
                return <BookDisplay 
                            key={book.title} 
                            book={{...book, gridIndex: index}} 
                            onClick={() => onBookClick({...book, gridIndex: index})}/>
            })}
            {selectedBook ? 
                <SelectedBookDisplay selectedBook={selectedBook}/> : ""}
        </div>
    );
}

export default BookGrid;