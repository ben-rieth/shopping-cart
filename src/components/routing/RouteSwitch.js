import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Shopping from '../../pages/Shopping';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shopping />} />
        </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;