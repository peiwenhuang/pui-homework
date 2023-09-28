import React from 'react';
import CartOverview from './CartOverview';

function NavBar (props) {
    // props:
    // flavorsMap
    // cart
    // showPopup
    // setShowPopup
    // roundTwo
    return (
        <div className="navBar-container">
            <div>
                <ul className="navBar">
                    <li>
                        <a className="highlighted" href="#">PRODUCTS</a>
                    </li>

                    <li className="popup-wrap">
                        <CartOverview
                        flavorsMap={props.flavorsMap}
                        cart={props.cart}
                        showPopup={props.showPopup}
                        setShowPopup={props.setShowPopup}
                        roundTwo={props.roundTwo}
                        />
                    </li>

                </ul>
                <hr/>
            </div>
            <p className="header-desc">Our hand-made cinnamon rolls</p>
        </div>
    );
};

export default NavBar;