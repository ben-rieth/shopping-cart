import SidebarLink from './../sidebar_link/SidebarLink';
import CloseIcon from './../../assets/images/close.svg';

type Props = {
    isVisible: boolean;
    onCloseClick: () => void;
}

const Sidebar = ({isVisible, onCloseClick}: Props) => {

    const visibleTransition = isVisible ? "translate-x-0" : "-translate-x-full";

    return (
        <div className={`flex flex-col gap-3 absolute z-50 pl-2 pr-10 bg-slate-500 top-0 h-screen transition-transform ease-in-out ${visibleTransition}`}>
            <SidebarLink linkTo="/" text="Home"/>
            <SidebarLink linkTo="/browse" text="Browse" />
            <SidebarLink linkTo="/contact" text="Contact" />
            <img src={CloseIcon} 
                alt="close" 
                onClick={onCloseClick} 
                className={`absolute -right-12 ${isVisible ? "" : "hidden"}`}/>
        </div>
    )
}

export default Sidebar;