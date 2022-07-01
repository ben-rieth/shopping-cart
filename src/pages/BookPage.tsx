import { useParams } from 'react-router';
import Button from '../components/button/Button';
import Book from '../services/types/Book';
import availableBooks from '../utils/AvailableBooks';

import Header from './../components/header/Header';


const BookPage = () => {

    const params = useParams();

    const book : Book | undefined = availableBooks.find(item => item.title === params.bookTitle && item.id === params.bookId);

    if (book) {
        return (
            <div>
                <Header />
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl">{book.title}</h2>
                    <p className="text-xl">{book.author}</p>
                    <img src={book.imageURL} alt="cover" className="w-36 my-2" />
                    <p className="text-xl my-1">${book.price}</p>
                    <Button text="Add to Cart"/>
                </div>
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