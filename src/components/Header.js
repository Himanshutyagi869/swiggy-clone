
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="logo">Swiggy Clone</div>
        <nav>
            <Link to="/">Home</Link>
			<br></br>
            <Link to="/cart">Cart</Link>
        </nav>
    </header>
);

export default Header;
