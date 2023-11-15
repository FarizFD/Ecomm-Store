import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DashBoard from './DashBoard';
import ProductPage from './ProductPage';
import Cart from './Cart'
import CheckOut from './CheckOut';
import Success from './Success';

function Routing() {
    return (
        <>

            <Home />
            <Routes>

                <Route path="/" element={<DashBoard />} />
                <Route path="/productPage/:id" element={<ProductPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/CheckOut/'>
                    <Route path="" element={<CheckOut/>}></Route>
                    <Route path=':id' element={<CheckOut/>}></Route>
                </Route>
                <Route path='/Success' element={<Success/>}/>
            </Routes>

        </>
    );
}

export default Routing;