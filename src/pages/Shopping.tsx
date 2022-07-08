import Header from "../components/header/Header";
import availableBooks from '../utils/AvailableBooks';
import BookGrid from '../components/book_grid/BookGrid';
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import LinkPath from "../components/link_path/LinkPath";
import { ChangeEvent, useState } from "react";
import Book from "../services/types/Book";
import GenreDropdown from "../components/genre_dropdown/GenreDropdown";
import { useParams } from "react-router-dom";

const Shopping = () => {
    const {urlGenre} = useParams();

    const getBookList = (genre: string) => {
        return availableBooks.filter((book) => book.genre.includes(genre));
    }

    const [selectedGenre, setSelectedGenre] = useState<string>(urlGenre ? urlGenre : "all");
    const [bookList, setBookList] = useState<Book[]>(urlGenre ? getBookList(urlGenre) : availableBooks);

    const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newGenre = event.target.value;
        setSelectedGenre(newGenre);

        if (newGenre === "all") {
            setBookList(availableBooks);
        } else {
            setBookList(
                getBookList(newGenre)
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
                <div className="flex bg-black/30 p-2 rounded-lg w-fit mx-auto">
                    <GenreDropdown value={selectedGenre} onValueChange={handleGenreChange}/>
                </div>
                <BookGrid books={bookList} />
            </div>
            <CartSidebar />
        </div>
    )
}

export default Shopping;