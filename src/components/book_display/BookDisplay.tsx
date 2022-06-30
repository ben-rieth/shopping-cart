import Book from './../../services/types/Book';
import AddToCartIcon from './../../assets/images/add_cart.svg';

type BookProps = {
    book: Book;
}

const BookDisplay = ({ book }: BookProps) => {

    return (
        <div className="flex flex-col items-center outline outline-1 p-4 outline-slate-300 relative">
            <img src={book.imageURL} alt="cover" className="w-24"/>
            <p className="font-bold">{book.title}</p>
            <p>${book.price}</p>
            <div className="absolute top-0 right-0 hidden">
                <img src={AddToCartIcon} alt="cart" className="w-8" />
            </div>
        </div>
    )
}

export default BookDisplay;