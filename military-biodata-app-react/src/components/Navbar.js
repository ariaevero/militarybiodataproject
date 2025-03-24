import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '15px' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ marginRight: '15px' }}>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
