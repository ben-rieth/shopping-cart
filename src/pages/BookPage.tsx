import { useParams } from 'react-router';
import availableBooks from '../utils/AvailableBooks';

import Header from './../components/header/Header';


const BookPage = () => {

    const params = useParams();

    const book = availableBooks.find(item => item.title === params.bookTitle && item.id === params.bookId);

    if (book) {
        return (
            <div>
                <Header />
                <h2>{params.bookId}</h2>
                <h2>{params.bookTitle}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Book not found</h2>
            </div>
        );
    }
}

export default BookPage;