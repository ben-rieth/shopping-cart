import Header from "../components/header/Header";
import availableBooks from '../utils/AvailableBooks';
import BookGrid from '../components/book_grid/BookGrid';
import CartSidebar from "../components/cart_sidebar/CartSidebar";
import LinkPath from "../components/link_path/LinkPath";
import { ChangeEvent, useState } from "react";
import Book from "../services/types/Book";

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
                    <label>
                        Search By Genre:&nbsp;&nbsp;
                        <select name="genre" value={selectedGenre} onChange={handleGenreChange}>
                            <option value="all">Show All</option>
                            <optgroup label="Genres">
                                <option value="Absurdist">Absurdist</option>
                                <option value="African-American">African American</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Coming-of-Age">Coming Of Age</option>
                                <option value="Dystopian">Dystopian</option>
                                <option value="Historical">Historical</option>
                                <option value="Modernist">Modernist</option>
                                <option value="Realistic">Realistic</option>
                                <option value="Romance">Romance</option>
                                <option value="Satire">Satire</option>
                                <option value="Social-Commentary">Social Commentary</option>
                                <option value="Tragedy">Tragedy</option>
                                <option value="War">War</option>
                            </optgroup>
                        </select>
                    </label>
                </div>
                <BookGrid books={bookList} />
            </div>
            <CartSidebar />
        </div>
    )
}

export default Shopping;