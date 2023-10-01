import React from 'react';
import Logo from "./Logo";
import NavBar from './NavBar';

function Header (props) {
    // props:
    // flavorsMap
    // cart
    // showPopup
    // setShowPopup
    // roundTwo
    return (
        <div className="header">
            <Logo />
            <NavBar
            flavorsMap={props.flavorsMap}
            cart={props.cart}
            showPopup={props.showPopup}
            setShowPopup={props.setShowPopup}
            roundTwo={props.roundTwo}
            />
        </div>
    );
};

export default Header;