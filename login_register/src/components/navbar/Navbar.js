import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <Link to="/login" className='navbar-brand'>Login React</Link>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item'><Link to="/login" className='nav-link'>Login</Link></li>
                <li className='nav-item'><Link to="/register" className='nav-link'>Register</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;