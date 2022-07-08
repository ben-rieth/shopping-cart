import { useParams } from "react-router-dom";
import BookGrid from "../components/book_grid/BookGrid";
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import Header from "../components/header/Header";
import LinkPath from "../components/link_path/LinkPath";
import availableBooks from "../utils/AvailableBooks";

const ShopGenrePage = () => {

    const { genre } = useParams();

    const books = availableBooks.filter(book => book.genre.includes(genre!));

    return (
        <div className="flex">
            <div className="w-screen">
                <Header />
                <div className="hidden md:block">
                    <LinkPath 
                        links={[{to: '/', title: 'Home'}, {to: '/browse', title: 'Browse All'}]} 
                        currentPage={genre!} />
                </div>
                <BookGrid books={books} />
            </div>
            <CartSidebar />
        </div>
    )
}

export default ShopGenrePage;