import { useContext } from "react";
import { CartContext } from "../../services/context/CartContext";
import Book from "../../services/types/Book";

const CartSidebar = () => {

    const {cart} = useContext(CartContext);

    const cartTotal = cart.reduce((prev: number, curr: Book) => prev + (curr.price * curr.quantity!), 0).toFixed(2);

    if (cart.length > 0 ) {
        return (
            <div className="w-40 border-l-2 relative hidden xl:block">
                <div className="absolute top-8 -left-[11px] w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white"/>
                <div className="flex flex-col items-center gap-5 h-screen py-5 overflow-y-auto">
                    <div className="text-center">
                        <p>Subtotal</p>
                        <p className="font-bold">${cartTotal}</p>
                    </div>
                    {cart.map((item: Book) => {
                        return (
                            <div className="relative">
                                <img src={item.imageURL} alt="" className="w-24"/>
                                {item.quantity! > 1 ? 
                                    <p className="absolute bottom-0 right-0 w-6 h-6 bg-red-700 text-center font-merienda">{item.quantity}</p> : ""}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default CartSidebar;