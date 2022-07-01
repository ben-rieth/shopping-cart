import MenuIcon from './../../assets/images/menu.svg';
import ShoppingBagIcon from './../../assets/images/shopping_bag.svg';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-3 py-2 bg-red-700">
            <img src={MenuIcon} alt="menu" className="cursor-pointer"/>
            <h1 className="text-3xl">New Leaf Books</h1>
            <img src={ShoppingBagIcon} alt="bag" className="cursor-pointer"/>
        </div>
    );
}

export default Header;