import { useState } from "react";
import RouteSwitch from "./components/routing/RouteSwitch";
import { CartContext } from "./services/context/CartContext";
import Book from "./services/types/Book";

const App = () => {

    const [cart, setCart] = useState<Book[]>([]);

    const addCartItem = (newItem: Book) => {

        const itemAlreadyInCart = cart.find(item => item.id === newItem.id);
        
        if (itemAlreadyInCart) {
            setCart(
                cart.map((item) => {
                    if (item.id === newItem.id) {
                        item.quantity! += 1;
                    }
                    return item;
                })
            )
        } else {
            newItem.quantity = 1;
            setCart(cart.concat(newItem))
        }
    }

    const changeItemQuantity = (selectedItem: Book, newQuantity: number) => {
        setCart(
            cart.map((item) => {
                if (item.id === selectedItem.id) {
                    item.quantity = newQuantity;
                }

                return item;
            })
        )
    }

    return (
        <CartContext.Provider 
            value={{
                cart, 
                addCartItem,
                changeItemQuantity,
                removeCartItem: (itemId: string) => setCart(cart.filter((item) => item.id !== itemId))
            }}
        >
            <RouteSwitch />
        </CartContext.Provider>
    );
}

export default App;