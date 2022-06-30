import { useState } from "react";
import RouteSwitch from "./components/routing/RouteSwitch";
import { CartContext } from "./services/context/CartContext";
import Book from "./services/types/Book";

const App = () => {

    const [cart, setCart] = useState<Book[]>([]);

    const test = (newItem: Book) => {
        setCart(cart.concat(newItem));
        console.log(cart);
    }

    return (
        <CartContext.Provider 
            value={{
                cart, 
                onAddItem: test,
                onRemoveItem: (itemId: string) => setCart(cart.filter((item) => item.id !== itemId))
            }}
        >
            <RouteSwitch />
        </CartContext.Provider>
    );
}

export default App;