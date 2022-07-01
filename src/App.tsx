import { useState } from "react";
import RouteSwitch from "./components/routing/RouteSwitch";
import { CartContext } from "./services/context/CartContext";
import Book from "./services/types/Book";

const App = () => {

    const [cart, setCart] = useState<Book[]>([]);

    return (
        <CartContext.Provider 
            value={{
                cart, 
                addCartItem: (newItem: Book) => setCart(cart.concat(newItem)),
                removeCartItem: (itemId: string) => setCart(cart.filter((item) => item.id !== itemId))
            }}
        >
            <RouteSwitch />
        </CartContext.Provider>
    );
}

export default App;