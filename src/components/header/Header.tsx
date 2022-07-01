import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import MenuIcon from './../../assets/images/menu.svg';
import ShoppingBagIcon from './../../assets/images/shopping_bag.svg';

const Header = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

    return (
        <div className="relative">
            <div className="flex items-center justify-between px-3 py-2 bg-red-700">
                <img src={MenuIcon} alt="menu" className="cursor-pointer" onClick={() => setSidebarVisible(true)}/>
                <h1 className="text-3xl">New Leaf Books</h1>
                <img src={ShoppingBagIcon} alt="bag" className="cursor-pointer"/>
            </div>
            <Sidebar isVisible={sidebarVisible} onCloseClick={() => setSidebarVisible(false)}/>
            <div className={`absolute top-0 left-0 ${sidebarVisible ? "bg-[rgba(0,0,0,0.6)] w-screen h-screen" : ""}`}></div>
        </div>
    );
}

export default Header;