import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomContext } from './CustomContext';

function Header() {
    const { cartItems } = useContext(CustomContext);
    const cartClassName = cartItems.length ? 'fill' : 'line';
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                <i className={`ri-shopping-cart-${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    );
}

export default Header;
