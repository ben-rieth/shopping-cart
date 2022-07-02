import { useContext } from "react"
import { CartContext } from "../services/context/CartContext";

import Header from './../components/header/Header';
import BookGrid from './../components/book_grid/BookGrid';
import Button from "../components/button/Button";

const Cart = () => {
    const { cart, addCartItem, removeCartItem} = useContext(CartContext);

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center my-4">
                {cart.length > 0 ?
                    <Button text="Proceed to Checkout" />
                    : 
                    <h2 className="text-center">No Items in Your Cart</h2>
                }
            </div> 
            <BookGrid books={cart} />
        </div>
    )
}

export default Cart;