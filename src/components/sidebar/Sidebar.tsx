import CloseIcon from './../../assets/images/close.svg';

type Props = {
    isVisible: boolean;
    onCloseClick: () => void;
}

const Sidebar = ({isVisible, onCloseClick}: Props) => {

    const visibleTransition = isVisible ? "translate-x-0" : "-translate-x-full";

    return (
        <div className={`flex flex-col absolute z-50 bg-slate-500 top-0 h-screen transition-transform ease-in ${visibleTransition}`}>
            <a href="/">Home</a>
            <a href="/shop">Browse</a>
            <a href="/contact">Contact</a>
            {isVisible ?
                <img className="absolute -right-12" alt="close" src={CloseIcon} onClick={onCloseClick}/> : ""
            }
        </div>
    )
}

export default Sidebar;