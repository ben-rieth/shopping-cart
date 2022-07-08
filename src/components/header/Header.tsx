import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import MenuIcon from './../../assets/images/menu.svg';
import CartIcon from './../cart_icon/CartIcon';

const Header = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

    return (
        <div className="relative">
            <div className="flex items-center justify-between px-3 py-4 relative z-10 shadow-md bg-gradient-to-tl via-[#F2BF5E] to-[#B91C1C] from-[#F28705]">
                <img src={MenuIcon} 
                    alt="menu" 
                    className="cursor-pointer w-12 xl:w-16" 
                    onClick={() => setSidebarVisible(true)}/>
                <h1 className="text-3xl text-center font-merienda font-semibold md:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-tl from-[#F28705] to-[#B91C1C]">New Leaf Books</h1>
                <CartIcon />
            </div>
            <Sidebar isVisible={sidebarVisible} onCloseClick={() => setSidebarVisible(false)}/>
        </div>
    );
}

export default Header;