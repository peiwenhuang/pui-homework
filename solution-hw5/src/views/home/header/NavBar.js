import React from 'react';

// view
import Popup from './Popup';

function NavBar (props) {
    // props:
    // flavorsMap
    // cart
    // toggleShowCart
    // showPopup
    // setShowPopup
    // toggleShowCart
    return (
        <div className="navBar-container">
            <div>
                <ul className="navBar">
                    <li>
                        <a className="highlighted" href="#">PRODUCTS</a>
                    </li>

                    <li className="popup-wrap">
                        <a className="highlighted" href="#"
                        onClick={props.toggleShowCart}>
                            CART
                        </a>

                        <Popup
                        flavorsMap={props.flavorsMap}
                        cart={props.cart}
                        showCart={props.showCart}
                        setShowCart={props.setShowCart}
                        showPopup={props.showPopup}
                        setShowPopup={props.setShowPopup}
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