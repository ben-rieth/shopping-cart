import QuantityAdjuster from '../quantity_adjuster/QuantityAdjuster';
import Book from './../../services/types/Book';

type BookProps = {
    book: Book;
}

const BookCartDisplay = ({book}: BookProps) => {
    return (
        <div className="flex flex-col items-center outline outline-1 p-4 outline-slate-300 relative z-10">
            <img src={book.imageURL} alt="cover" className="w-24"/>
            <p className="font-bold text-center text-sm">{book.title}</p>
            <p>${book.price}</p>
            <QuantityAdjuster />
        </div>
    )
}

export default BookCartDisplay;