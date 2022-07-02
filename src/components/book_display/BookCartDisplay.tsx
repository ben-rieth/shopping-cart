import { useContext } from 'react';
import { CartContext } from '../../services/context/CartContext';
import QuantityAdjuster from '../quantity_adjuster/QuantityAdjuster';
import Book from './../../services/types/Book';

type BookProps = {
    book: Book;
}

const BookCartDisplay = ({book}: BookProps) => {
    const {changeItemQuantity} = useContext(CartContext);

    return (
        <div className="flex flex-col items-center outline outline-1 p-4 outline-slate-300 relative z-10">
            <img src={book.imageURL} alt="cover" className="w-24"/>
            <p className="font-bold text-center text-sm">{book.title}</p>
            <p>${book.price}</p>
            <QuantityAdjuster 
                initialQuantity={book.quantity!}
                onAddPress={() => changeItemQuantity(book, book.quantity! + 1)}
                onRemovePress={() => changeItemQuantity(book, book.quantity! - 1)}
                onInputChange={(event) => changeItemQuantity(book, Number(event.target.value))}/>
        </div>
    )
}

export default BookCartDisplay;