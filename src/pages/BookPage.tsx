import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Button from '../components/button/Button';
import CartSidebar from '../components/cart_sidebar/CartSidebar';
import Footer from '../components/footer/Footer';
import GenreLink from '../components/genre_link/GenreLink';
import LinkPath from '../components/link_path/LinkPath';
import QuantityAdjuster from '../components/quantity_adjuster/QuantityAdjuster';
import { CartContext } from '../services/context/CartContext';
import Book from '../services/types/Book';
import availableBooks from '../utils/AvailableBooks';

import Header from './../components/header/Header';


const BookPage = () => {

    const [quantity, setQuantity] = useState<number>(1);

    const params = useParams();
    const navigate = useNavigate();

    const { addCartItem } = useContext(CartContext);

    const book : Book | undefined = availableBooks.find(item => item.title === params.bookTitle && item.id === params.bookId);

    const addToCartClick = () => {
        const bookWithQuantity = {...book, quantity: quantity};
        addCartItem(bookWithQuantity);
        navigate(-1);
    }

    if (book) {
        return (
            <div className="flex">
                <div className="w-screen flex flex-col h-screen">
                    <Header />
                    <main className="flex-[1_0_auto]">
                        <div className="hidden md:block">
                            <LinkPath 
                                links={[{to: '/', title: 'Home'}, {to: '/browse', title: 'Browse'}]} 
                                currentPage={book.title} />
                        </div>
                        
                        <div className="flex flex-col items-center mx-5 max-w-5xl
                                        md:grid md:grid-cols[1fr_5fr] md:grid-rows[2fr_5fr_.5fr_.5fr_5fr_.5fr_5fr] md:gap-x-10 md:mx-auto md:ju">
                            <div className="flex flex-col md:col-start-2 
                                            md:col-end-3 md:row-start-1 md:border-b-2 min-w-0">
                                <h2 className="text-3xl font-merienda text-center whitespace-nowrap
                                                md:text-start">
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
                                            md:col-start-1 md:row-span-3 md:justify-self-end lg:w-48 lg:h-72"/>

                            <div className="flex flex-col justify-center gap-2 bg-black/20 p-5 rounded-xl
                                            md:col-start-2 md:row-start-2 md:self-start md:h-full" >

                                <p className="text-3xl text-center my-1 font-merienda">${book.price}</p>
                                <div className="flex gap-5 justify-center md:flex-row">
                                    <div className="hidden md:block">
                                        <QuantityAdjuster 
                                            initialQuantity={quantity} 
                                            showDeleteIcon={false}
                                            onInputChange={(newQuantity) => setQuantity(newQuantity)}/>
                                    </div>
                                    <Button text="Add to Cart" onClick={addToCartClick}/>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-x-2 md:col-start-2 md:row-start-3 md:justify-start">
                                <p className="font-semibold">Genres: </p>
                                {book.genre.map((genre) => <GenreLink genre={genre} key={genre}/>)}
                            </div> 

                            <div className="h-1 m-4 w-screen bg-gradient-to-tl from-[#F2BF5E] via-[#F28705] to-[#BF4904] 
                                            md:col-start-1 md:col-span-3 md:row-start-4 md:w-full md:mx-auto"/>

                            <div className="mx-10 my-4 md:col-start-1 md:col-span-2 md:row-start-5 md:my-0">
                                <h3 className="text-2xl  text-center font-merienda">
                                    Summary
                                </h3>
                                <p className="text-sm text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Nulla aliquet porttitor lacus luctus accumsan. Consectetur libero id faucibus nisl tincidunt eget nullam non. Arcu risus quis varius quam quisque id diam vel. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Dignissim suspendisse in est ante in. Sit amet est placerat in egestas erat. Feugiat vivamus at augue eget arcu. Faucibus in ornare quam viverra orci sagittis eu volutpat. Aliquet nibh praesent tristique magna. Non arcu risus quis varius quam quisque id diam vel. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                                </p>
                            </div>
                        </div>
                    </main>
                    <Footer />
                    
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