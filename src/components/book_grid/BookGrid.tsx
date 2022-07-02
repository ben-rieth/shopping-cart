import Book from '../../services/types/Book';
import BookDisplay from './../../components/book_display/BookDisplay';
import BookCartDisplay from './../../components/book_display/BookCartDisplay';

type BookGridProps = {
    books: Book[];
    isCart?: boolean;
}

const BookGrid = ({books, isCart=false} : BookGridProps) => {

    return (
        <div className="grid grid-cols-2 auto-rows-min m-4">
            {books.map((book, index) => {
                return isCart ?
                    <BookCartDisplay 
                        key={book.title} 
                        book={{...book, gridIndex: index}} />
                    :
                    <BookDisplay 
                        key={book.title} 
                        book={{...book, gridIndex: index}} />
            })}
        </div>
    );
}

export default BookGrid;