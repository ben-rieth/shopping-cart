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
            <div className="bg-gradient-to-tl from-[#F2BF5E] via-[#F28705] to-[#BF4904] h-screen">
                <Header />
                <h2 className="text-3xl text-white font-merienda text-center pt-5">{book.title}</h2>
                <p className="text-xl text-white text-center">{book.author}</p>
                <div className="flex justify-around items-center text-slate-200 border-b-2">
                    <div className="flex flex-col">
                        <img src={book.imageURL} alt="cover" className="w-36 h-56 my-2" />
                    </div>
                    <div className="flex flex-col justify-center gap-2 bg-black/20 p-5 rounded-xl">
                        <p className="text-3xl text-center my-1 font-merienda">${book.price}</p>
                        <Button text="Add to Cart" onClick={addToCartClick}/>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl text-white text-center font-merienda mt-4">Summary</h3>
                    <p className="text-white text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Nulla aliquet porttitor lacus luctus accumsan. Consectetur libero id faucibus nisl tincidunt eget nullam non. Arcu risus quis varius quam quisque id diam vel. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Dignissim suspendisse in est ante in. Sit amet est placerat in egestas erat. Feugiat vivamus at augue eget arcu. Faucibus in ornare quam viverra orci sagittis eu volutpat. Aliquet nibh praesent tristique magna. Non arcu risus quis varius quam quisque id diam vel. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                    </p>
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