import Header from "../components/header/Header";
import availableBooks from './../utils/AvailableBooks';
import BookGrid from './../components/book_grid/BookGrid';

const Shopping = () => {
    return (
        <div>
            <Header />
            <BookGrid books={availableBooks} />
        </div>
    )
}

export default Shopping;