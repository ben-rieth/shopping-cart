import Book from './../../services/types/Book';
import AddToCartIcon from './../../assets/images/add_cart.svg';
import { Link } from 'react-router-dom';

type BookProps = {
    book: Book;
}

const BookDisplay = ({book}: BookProps) => {

    const bookPage = `/browse/${book.title}/${book.id}`;

    return (
        <div className="flex flex-col items-center outline outline-1 p-4 outline-slate-300 relative z-10">
            <Link to={bookPage}>
                <img src={book.imageURL} alt="cover" className="w-24"/>
            </Link>
            <Link to={bookPage}>
                <p className="font-bold text-center text-sm">{book.title}</p>
            </Link>
            <p>${book.price}</p>
            <div className="absolute top-0 right-0 hidden">
                <img src={AddToCartIcon} alt="cart" className="w-8" />
            </div>
        </div>
    )
}

export default BookDisplay;