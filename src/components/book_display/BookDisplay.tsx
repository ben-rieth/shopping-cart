import Book from './../../services/types/Book';

type BookProps = {
    book: Book;
}

const BookDisplay = ({ book }: BookProps) => {

    return (
        <div className="flex flex-col items-center outline outline-1 p-4 outline-slate-300">
            <img src={book.imageURL} alt="cover" className="w-24"/>
            <p className="font-bold">{book.title}</p>
            <p>${book.price}</p>
        </div>
    )
}

export default BookDisplay;