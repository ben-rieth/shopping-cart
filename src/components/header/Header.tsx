import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import MenuIcon from './../../assets/images/menu.svg';
import CartIcon from './../cart_icon/CartIcon';

const Header = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

    return (
        <div className="relative">
            <div className="flex items-center justify-between px-3 py-4 bg-red-700 relative z-10">
                <img src={MenuIcon} 
                    alt="menu" 
                    className="cursor-pointer w-12 xl:w-16" 
                    onClick={() => setSidebarVisible(true)}/>
                <h1 className="text-2xl text-center font-merienda md:text-4xl xl:text-5xl">New Leaf Books</h1>
                <CartIcon />
            </div>
            <Sidebar isVisible={sidebarVisible} onCloseClick={() => setSidebarVisible(false)}/>
        </div>
    );
}

export default Header;