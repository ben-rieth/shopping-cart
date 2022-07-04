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
            <img src={ShoppingBagIcon} alt="bag" className="cursor-pointer"/>
            <p className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-2/3 text-center text-lg font-merienda pointer-events-none">{cartSize}</p>
        </div>
    );
}

export default CartIcon;