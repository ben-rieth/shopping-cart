import Header from "../components/header/Header";
import availableBooks from '../utils/AvailableBooks';
import BookGrid from '../components/book_grid/BookGrid';
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import LinkPath from "../components/link_path/LinkPath";
import { ChangeEvent, useState } from "react";
import Book from "../services/types/Book";
import GenreDropdown from "../components/genre_dropdown/GenreDropdown";

const Shopping = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>("all");
    const [bookList, setBookList] = useState<Book[]>(availableBooks);

    const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newGenre = event.target.value;
        setSelectedGenre(newGenre);

        if (newGenre === "all") {
            setBookList(availableBooks);
        } else {
            setBookList(
                availableBooks.filter((book) => book.genre.includes(newGenre))
            );
        }
    }

    return (
        <div className="flex">
            <div className="w-screen">
                <Header />
                <div className="hidden md:block">
                    <LinkPath 
                        links={[{to: '/', title: 'Home'}]} 
                        currentPage="Browse" />
                </div>
                <div>
                    <GenreDropdown value={selectedGenre} onValueChange={handleGenreChange}/>
                </div>
                <BookGrid books={bookList} />
            </div>
            <CartSidebar />
        </div>
    )
}

export default Shopping;