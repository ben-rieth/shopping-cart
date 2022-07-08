import BookGrid from "../components/book_grid/BookGrid";
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import Header from "../components/header/Header";
import LinkPath from "../components/link_path/LinkPath";
import Genre from "../services/types/Genre";
import availableBooks from "../utils/AvailableBooks";

const ShopGenrePage = () => {

    const books = availableBooks.filter(book => book.genre.includes(Genre.Comedy))

    return (
        <div className="flex">
            <div className="w-screen">
                <Header />
                <div className="hidden md:block">
                    <LinkPath 
                        links={[{to: '/', title: 'Home'}, {to: '/browse', title: 'Browse All'}]} 
                        currentPage="Comedy" />
                </div>
                <BookGrid books={books} />
            </div>
            <CartSidebar />
        </div>
    )
}

export default ShopGenrePage;