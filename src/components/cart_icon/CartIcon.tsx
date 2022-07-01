import { useContext } from 'react';
import {CartContext} from './../../services/context/CartContext';
import ShoppingBagIcon from './../../assets/images/shopping_bag.svg';

const CartIcon = () => {
    const cartContext = useContext(CartContext);

    const cartSize = cartContext.cart.length;
    console.log(cartSize);

    return (
        <div className="relative">
            <img src={ShoppingBagIcon} alt="bag" className="cursor-pointer"/>
            <p className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-2/3 text-center text-lg pointer-events-none">{cartSize}</p>
        </div>
    );
}

export default CartIcon;