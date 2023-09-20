import React from 'react';

function NavBar () {
    return (
        <div className="navBar-container">
            <div>
                <ul className="navBar">
                    <li>
                        <a className="highlighted" href="#">PRODUCTS</a>
                    </li>

                    <li className="popup-wrap">
                        <a className="highlighted" href="#">
                            CART
                            <p id="cart-overview">
                                0 item
                                <br/>Total: $0.00
                            </p>
                        </a>
                        
                       {/* popup modal shows upon clicking "Add to Cart": https://codeconvey.com/css-modal-popup-on-button-click/ */}
                        <div id="added-to-cart" className="overlay hidden">
                            <div className="popup">
                                <p>
                                    Added to cart:
                                    <br/><br/>
                                    <b>Raisin cinammon roll</b>
                                    <br/>Double chocolate glazing
                                    <br/>Pack of 6
                                    <br/>Price: $22.45
                                </p>
                            </div>
                        </div>
                    </li>

                </ul>
                <hr/>
            </div>
            <p className="header-desc">Our hand-made cinnamon rolls</p>
        </div>
    );
};

export default NavBar;