import { useContext } from "react"
import { CartContext } from "../services/context/CartContext";

import Header from './../components/header/Header';
import BookGrid from './../components/book_grid/BookGrid';
import Button from "../components/button/Button";
import Book from "../services/types/Book";

import CartEmptyIcon from './../assets/images/cart.svg';
import { Link } from "react-router-dom";
import LinkPath from "../components/link_path/LinkPath";

const Cart = () => {
    const { cart } = useContext(CartContext);

    const cartTotal : number = cart.reduce((prev: number, curr: Book) => prev + (curr.price * curr.quantity!), 0)

    return (
        <div>
            <Header />
            
            <div className="hidden md:block">
                <LinkPath 
                links={[{to: '/', title: 'Home'}]} 
                currentPage="Cart" />
            </div>

            <div className="flex flex-col justify-center items-center my-4 px-5 gap-2">
                {cart.length > 0 ?
                    <>
                        <h2 className="text-xl lg:text-3xl">
                            Subtotal:&nbsp; 
                            <span className="font-bold">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </h2>
                        <Button text="Proceed to Checkout" />
                    </>
                    : 
                    <>
                        <img src={CartEmptyIcon} alt="" className="w-28 h-28"/>
                        <h2 className="text-center text-xl">There are currently no items in your shopping cart.</h2>
                        <Link to="/browse">
                            <Button text="Continue Shopping"/>
                        </Link>
                    </>
                }
            </div> 
            <BookGrid books={cart} isCart={true}/>
        </div>
    )
}

export default Cart;