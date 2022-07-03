import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import MenuIcon from './../../assets/images/menu.svg';
import CartIcon from './../cart_icon/CartIcon';

const Header = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

    return (
        <div className="relative">
            <div className="flex items-center justify-between px-3 py-4 bg-red-700">
                <img src={MenuIcon} alt="menu" className="cursor-pointer" onClick={() => setSidebarVisible(true)}/>
                <h1 className="text-2xl text-center font-merienda">New Leaf Books</h1>
                <CartIcon />
            </div>
            <Sidebar isVisible={sidebarVisible} onCloseClick={() => setSidebarVisible(false)}/>
            <div onClick={() => setSidebarVisible(false)} className={`absolute top-0 left-0 z-40 ${sidebarVisible ? "bg-[rgba(0,0,0,0.6)] w-screen h-screen" : ""}`}></div>
        </div>
    );
}

export default Header;