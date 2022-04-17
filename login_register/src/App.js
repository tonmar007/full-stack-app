import React from 'react';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home/Home';
import HomePage from './pages/homePage/homePage';

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;