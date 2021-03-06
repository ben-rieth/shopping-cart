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
        <>
            <aside className={`flex flex-col gap-3 pt-3 pl-3 w-2/3 max-w-sm absolute h-screen z-50 bg-[#F2F2F2] top-0 transition-transform ease-in-out ${visibleTransition}`}>
                <p 
                    className="text-2xl border-b-2 border-black font-merienda w-full text-transparent bg-clip-text bg-gradient-to-tl from-[#F28705] to-[#B91C1C]"
                >
                    New Leaf Books
                </p>
                <SidebarLink linkTo="/" text="Home" icon={HomeIcon}/>
                <SidebarLink linkTo="/browse" text="Browse" icon={ShopIcon}/>
                <SidebarLink linkTo="/contact" text="Contact" icon={ContactIcon}/>
                <img src={CloseIcon} 
                    alt="close" 
                    onClick={onCloseClick} 
                    className={`absolute -right-12 top-0 cursor-pointer ${isVisible ? "" : "hidden"}`}/>
            </aside>
            <div onClick={onCloseClick} 
                className={`absolute top-0 left-0 z-40 
                            ${isVisible ? "bg-[rgba(0,0,0,0.6)] w-screen h-screen" : ""}`}/>
        </>
    )
}

export default Sidebar;