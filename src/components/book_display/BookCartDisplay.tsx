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
        <div className="outline outline-1 p-4 outline-slate-300 col-span-full relative z-10">
            <div className="flex gap-5">
                <img src={book.imageURL} alt="cover" className="w-16"/>
                <div className="flex flex-col">
                    <p className="font-bold text-2xl">{book.title}</p>
                    <p className="text-lg">${book.price}</p>
                </div>
            </div>
            <div className="flex mt-4 gap-5">
                <QuantityAdjuster 
                    initialQuantity={book.quantity!}
                    onAddPress={() => changeItemQuantity(book, book.quantity! + 1)}
                    onRemovePress={() => changeItemQuantity(book, book.quantity! - 1)}
                    onInputChange={(newQuantity) => changeItemQuantity(book, newQuantity)}/>
                <Button text="Remove" onClick={() => removeCartItem(book)}/>
            </div>
        </div>
    )
}

export default BookCartDisplay;