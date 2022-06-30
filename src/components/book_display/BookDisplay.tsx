import Book from './../../services/types/Book';

type BookProps = {
    book: Book;
}

const BookDisplay = ({ book }: BookProps) => {

    return (
        <div>
            <p>{book.title}</p>
            <p>{book.price}</p>
        </div>
    )
}

export default BookDisplay;