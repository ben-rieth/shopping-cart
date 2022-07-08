import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './../../pages/Home';
import Shopping from './../../pages/Shopping';
import BookPage from './../../pages/BookPage';
import Cart from './../../pages/Cart';
import Contact from '../../pages/Contact';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Shopping />} />
                <Route path="/browse/g/:urlGenre" element={<Shopping />} />
                <Route path="/browse/:bookTitle/:bookId" element={<BookPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;