import React from 'react';
import Logo from "./Logo";
import NavBar from './NavBar';

function Header (props) {
    // props:
    // flavorsMap
    // cart
    // toggleShowCart
    // showPopup
    // setShowPopup
    return (
        <div className="header">
            <Logo />
            <NavBar
            flavorsMap={props.flavorsMap}
            cart={props.cart}
            toggleShowCart={props.toggleShowCart}
            showPopup={props.showPopup}
            setShowPopup={props.setShowPopup}
            />
        </div>
    );
};

export default Header;