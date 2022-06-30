import Book from './../../services/types/Book';

type BookProps = {
    book: Book;
}

const BookDisplay = ({ book }: BookProps) => {

    return (
        <div className="flex flex-col items-center">
            <img src={book.imageURL} alt="cover" className="w-24"/>
            <p className="font-bold">{book.title}</p>
            <p>${book.price}</p>
        </div>
    )
}

export default BookDisplay;