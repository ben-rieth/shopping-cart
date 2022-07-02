import { useContext } from "react"
import { CartContext } from "../services/context/CartContext";

import Header from './../components/header/Header';
import BookGrid from './../components/book_grid/BookGrid';
import Button from "../components/button/Button";
import Book from "../services/types/Book";

const Cart = () => {
    const { cart } = useContext(CartContext);

    const cartTotal : number = cart.reduce((prev: number, curr: Book) => prev + (curr.price * curr.quantity!), 0)

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center my-4">
                {cart.length > 0 ?
                    <>
                        <h2>Subtotal: ${cartTotal}</h2>
                        <Button text="Proceed to Checkout" />
                    </>
                    : 
                    <h2 className="text-center">No Items in Your Cart</h2>
                }
            </div> 
            <BookGrid books={cart} isCart={true}/>
        </div>
    )
}

export default Cart;