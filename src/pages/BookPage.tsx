import { useParams } from 'react-router';

import Header from './../components/header/Header';


const BookPage = () => {

    const params = useParams();

    return (
        <div>
            <Header />
            <h2>{params.bookId}</h2>
        </div>
    )
}

export default BookPage;