import { useContext } from 'react';
import { CartContext } from '../../services/context/CartContext';
import Button from '../button/Button';
import QuantityAdjuster from '../quantity_adjuster/QuantityAdjuster';
import Book from './../../services/types/Book';

type Props = {
    book: Book;
}

const BookCartDisplay = ({book}: Props) => {
    const {changeItemQuantity, removeCartItem} = useContext(CartContext);

    return (
        <article data-cy="cart-item-listing"
            className="outline outline-1 p-4 outline-slate-300 col-span-full relative z-10 flex flex-col lg:flex-row lg:justify-between">
            <div className="flex gap-5">
                <img src={book.imageURL} alt="cover" className="w-16 lg:w-28"/>
                <div className="flex flex-col">
                    <p className="font-bold text-2xl lg:text-4xl">{book.title}</p>
                    <p className="text-lg lg:text-2xl">${book.price}</p>
                </div>
            </div>
            <div className="flex items-center mt-4 gap-5 lg:flex-col">
                <QuantityAdjuster 
                    initialQuantity={book.quantity!}
                    onAddPress={() => changeItemQuantity(book, book.quantity! + 1)}
                    onRemovePress={() => changeItemQuantity(book, book.quantity! - 1)}
                    onInputChange={(newQuantity) => changeItemQuantity(book, newQuantity)}/>
                <Button text="Remove" onClick={() => removeCartItem(book)}/>
            </div>
        </article>
    )
}

export default BookCartDisplay;