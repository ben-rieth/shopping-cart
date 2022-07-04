import Header from "../components/header/Header";
import availableBooks from '../utils/AvailableBooks';
import BookGrid from '../components/book_grid/BookGrid';

const Shopping = () => {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-tl from-[#F2BF5E] via-[#F28705] to-[#BF4904]">
                <BookGrid books={availableBooks} />
            </div>
        </div>
    )
}

export default Shopping;