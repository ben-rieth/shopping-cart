import MenuIcon from './../../assets/images/menu.svg';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-5 py-2 bg-red-700">
            <h1 className="text-3xl">New Leaf Books</h1>
            <img src={MenuIcon} alt="menu" className="cursor-pointer"/>
        </div>
    );
}

export default Header;