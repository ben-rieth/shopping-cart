import Book from '../../services/types/Book';
import BookDisplay from './../../components/book_display/BookDisplay';
import BookCartDisplay from './../../components/book_display/BookCartDisplay';

type BookGridProps = {
    books: Book[];
    isCart?: boolean;
}

const BookGrid = ({books, isCart=false} : BookGridProps) => {

    return (
        <main className={`grid grid-cols-2 auto-rows-min py-4 px-10 mx-auto ${isCart ? 'max-w-7xl' : 'max-w-screen-2xl'}
                        sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7`}>
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
        </main>
    );
}

export default BookGrid;