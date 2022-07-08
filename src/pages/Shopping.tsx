import Header from "../components/header/Header";
import availableBooks from '../utils/AvailableBooks';
import BookGrid from '../components/book_grid/BookGrid';
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import LinkPath from "../components/link_path/LinkPath";
import { ChangeEvent, useState } from "react";
import Book from "../services/types/Book";
import GenreDropdown from "./../components/genre_dropdown/GenreDropdown";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";

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
            <div className="w-screen flex flex-col h-screen">
                <Header />
                <main className="flex-[1_0_auto]">
                    <div className="hidden md:block">
                        <LinkPath 
                            links={[{to: '/', title: 'Home'}]} 
                            currentPage="Browse" />
                    </div>
                    <div className="flex bg-black/30 p-2 rounded-lg w-fit mx-auto">
                        <GenreDropdown value={selectedGenre} onValueChange={handleGenreChange}/>
                    </div>
                    <BookGrid books={bookList} />
                </main>
                <Footer />
            </div>
            <CartSidebar />
        </div>
    )
}

export default Shopping;