import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Button from '../components/button/Button';
import CartSidebar from '../components/cart_sidebar/CartSidebar';
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
            <div className="flex">
                <div className="w-screen">
                    <Header />
                    <div className="flex flex-col items-center mx-5 
                                    md:grid md:grid-cols[minmax(200px,_1fr)_2fr_1fr] md:grid-rows[2fr_1fr_5fr] md:gap-x-5">
                        <div className="flex flex-col md:col-start-2 
                                        md:col-end-3 md:row-start-1 md:border-b-2">
                            <h2 className="text-3xl font-merienda text-center pt-5 
                                            md:text-start ">
                                {book.title}
                            </h2>
                            <p className="text-xl text-center 
                                            md:text-start">
                                {book.author}
                            </p>
                        </div>

                        <img src={book.imageURL} 
                            alt="cover" 
                            className="w-36 h-56 my-2 
                                        md:col-start-1 md:row-span-3 md:justify-self-end md:w-48 md:h-72"/>

                        <div className="flex flex-col justify-center gap-2 bg-black/20 p-5 rounded-xl 
                                        md:col-start-3 md:row-start-1 md:row-span-3 md:place-self-center md:my-2">

                            <p className="text-3xl text-center my-1 font-merienda">${book.price}</p>
                            <Button text="Add to Cart" onClick={addToCartClick}/>

                        </div>

                        <div className="h-1 m-4 w-screen bg-gradient-to-tl from-[#F2BF5E] via-[#F28705] to-[#BF4904] 
                                        md:hidden"/>

                        <h3 className="text-2xl  text-center font-merienda mt-4 
                                        md:hidden">
                            Summary
                        </h3>
                        <p className="text-sm text-center 
                                        md:col-start-2 md:col-end-3 md:row-start-2 md:row-span-2 md:text-left md:line-clamp-10 md:place-self-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Nulla aliquet porttitor lacus luctus accumsan. Consectetur libero id faucibus nisl tincidunt eget nullam non. Arcu risus quis varius quam quisque id diam vel. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Dignissim suspendisse in est ante in. Sit amet est placerat in egestas erat. Feugiat vivamus at augue eget arcu. Faucibus in ornare quam viverra orci sagittis eu volutpat. Aliquet nibh praesent tristique magna. Non arcu risus quis varius quam quisque id diam vel. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                        </p>
                    </div>
                    
                </div>
                <CartSidebar />
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