import Book from '../../services/types/Book';
import BookDisplay from './../../components/book_display/BookDisplay';

type BookGridProps = {
    books: Book[]
}

const BookGrid = ({books} : BookGridProps) => {

    return (
        <div className="grid grid-cols-2 auto-rows-min m-4">
            {books.map((book, index) => {
                return <BookDisplay 
                            key={book.title} 
                            book={{...book, gridIndex: index}} />
            })}
        </div>
    );
}

export default BookGrid;