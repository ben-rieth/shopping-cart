import { useContext } from "react";
import { CartContext } from "../../services/context/CartContext";
import Book from "../../services/types/Book";
import CartSidebarItem from "./CartSidebarItem";

const CartSidebar = () => {

    const {cart} = useContext(CartContext);

    const cartTotal = cart.reduce((prev: number, curr: Book) => prev + (curr.price * curr.quantity!), 0).toFixed(2);

    if (cart.length > 0 ) {
        return (
            <aside className="w-40 border-l-2 relative hidden xl:block">
                <div className="absolute top-8 -left-[11px] w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white z-30"/>
                <div className="flex flex-col items-center gap-5 h-screen py-5 overflow-y-auto">
                    <div className="text-center" key="subtotal-sidebar">
                        <p>Cart Subtotal</p>
                        <p className="font-bold">${cartTotal}</p>
                    </div>
                    {cart.map((item: Book) => <CartSidebarItem book={item} key={`${item.title}-sidebar`}/>)}
                </div>
            </aside>
        )
    } else {
        return <div></div>;
    }
}

export default CartSidebar;