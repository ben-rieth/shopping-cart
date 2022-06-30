import Header from "../components/header/Header";
import availableBooks from './../utils/AvailableBooks';
import BookDisplay from './../components/book_display/BookDisplay';

const Shopping = () => {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-2 m-4">
                {availableBooks.map((book) => {
                    return <BookDisplay key={book.title} book={book}/>
                })}
            </div>
            
        </div>
    )
}

export default Shopping;