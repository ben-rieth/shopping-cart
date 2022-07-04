import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from './../../services/context/CartContext';
import ShoppingBagIcon from './../../assets/images/shopping_bag.svg';

const CartIcon = () => {
    const cartContext = useContext(CartContext);
    const navigate = useNavigate();

    const cartSize = cartContext.cart.length;

    return (
        <div className="relative" onClick={() => navigate("/cart")}>
            <img src={ShoppingBagIcon} alt="bag" className="cursor-pointer w-12 xl:w-16"/>
            <p className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 text-center text-lg xl:text-3xl font-merienda pointer-events-none">{cartSize}</p>
        </div>
    );
}

export default CartIcon;