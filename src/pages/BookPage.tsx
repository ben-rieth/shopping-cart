import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Button from '../components/button/Button';
import { CartContext } from '../services/context/CartContext';
import Book from '../services/types/Book';
import availableBooks from '../utils/AvailableBooks';

import Header from './../components/header/Header';


const BookPage = () => {

    const params = useParams();
    const navigate = useNavigate();

    const { addCartItem } = useContext(CartContext);

    const book : Book | undefined = availableBooks.find(item => item.title === params.bookTitle && item.id === params.bookId);

    const addToCartClick = () => {
        addCartItem(book)
        navigate(-1);
    }

    if (book) {
        return (
            <div>
                <Header />
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl">{book.title}</h2>
                    <p className="text-xl">{book.author}</p>
                    <img src={book.imageURL} alt="cover" className="w-36 my-2" />
                    <p className="text-xl my-1">${book.price}</p>
                    <Button text="Add to Cart" onClick={addToCartClick}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Book not found</h2>
            </div>
        );
    }
}

export default BookPage;