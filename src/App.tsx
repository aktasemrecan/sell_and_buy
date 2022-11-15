import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import "./index.css";
import ProductDetail from './pages/ProductDetail';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from "react-redux";
import { loginSuccessAction } from './redux/actions';
import AddProduct from './pages/AddProduct';
import 'react-toastify/dist/ReactToastify.css';
import Favorites from './pages/Favorites';
import Login from './pages/Login';


const App = () => {

    const dispatch = useDispatch();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(loginSuccessAction());
        } else {
            dispatch(loginSuccessAction());
        }
    })

    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/vehicles/:id' element={<ProductDetail/>} />
                <Route path='/add-product' element={<AddProduct />} />
            </Routes>
            
        </BrowserRouter>
        <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </>;

}

export default App;