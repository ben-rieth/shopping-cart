import Header from "../components/header/Header";
import availableBooks from '../utils/AvailableBooks';
import BookGrid from '../components/book_grid/BookGrid';
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import LinkPath from "../components/link_path/LinkPath";

const Shopping = () => {
    return (
        <div className="flex">
            <div className="w-screen">
                <Header />
                <div className="hidden md:block">
                    <LinkPath 
                        links={[{to: '/', title: 'Home'}]} 
                        currentPage="Browse" />
                </div>
                <BookGrid books={availableBooks} />
            </div>
            <CartSidebar />
        </div>
    )
}

export default Shopping;