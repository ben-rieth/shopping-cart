import { Link } from 'react-router-dom';
import CloseIcon from './../../assets/images/close.svg';

type Props = {
    isVisible: boolean;
    onCloseClick: () => void;
}

const Sidebar = ({isVisible, onCloseClick}: Props) => {

    const visibleTransition = isVisible ? "translate-x-0" : "-translate-x-full";

    return (
        <div className={`flex flex-col absolute z-50 bg-slate-500 top-0 h-screen transition-transform ease-in-out ${visibleTransition}`}>
            <Link to="/">Home</Link>
            <Link to="/shop">Browse</Link>
            <Link to="/contact">Contact</Link>
            {isVisible ?
                <img className="absolute -right-12" alt="close" src={CloseIcon} onClick={onCloseClick}/> : ""
            }
        </div>
    )
}

export default Sidebar;