import React from 'react';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home/Home';

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;