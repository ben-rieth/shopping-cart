import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Shopping from '../../pages/Shopping';
import BookPage from '../../pages/BookPage';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shopping />} />
                <Route path="/shop/:bookTitle/:bookId" element={<BookPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;