import SidebarLink from './../sidebar_link/SidebarLink';
import CloseIcon from './../../assets/images/close.svg';
import HomeIcon from './../../assets/images/home.svg';
import ShopIcon from './../../assets/images/shop.svg';
import ContactIcon from './../../assets/images/contact.svg';

type Props = {
    isVisible: boolean;
    onCloseClick: () => void;
}

const Sidebar = ({isVisible, onCloseClick}: Props) => {

    const visibleTransition = isVisible ? "translate-x-0" : "-translate-x-full";

    return (
        <div className={`flex flex-col gap-3 pt-3 pl-3 w-2/3 absolute z-50 bg-[#D9D2C5] top-0 h-screen transition-transform ease-in-out ${visibleTransition}`}>
            <p className="text-2xl border-b-2 border-black font-merienda w-full">New Leaf Books</p>
            <SidebarLink linkTo="/" text="Home" icon={HomeIcon}/>
            <SidebarLink linkTo="/browse" text="Browse" icon={ShopIcon}/>
            <SidebarLink linkTo="/contact" text="Contact" icon={ContactIcon}/>
            <img src={CloseIcon} 
                alt="close" 
                onClick={onCloseClick} 
                className={`absolute -right-12 top-0 ${isVisible ? "" : "hidden"}`}/>
        </div>
    )
}

export default Sidebar;