import React from 'react';

function Popup (props) {
    // props:
    // visibility
    // name
    // glazing
    // packSize
    // price

    return (
        <div id="added-to-cart" className={`overlay ${props.visibility}`}>
            <div className="popup">
                <p>
                    Added to cart:
                    <br/><br/>
                    <b>{props.name}</b>
                    <br/>{props.glazing}
                    <br/>Pack of {props.packSize}
                    <br/>Price: ${props.price}
                </p>
            </div>
        </div>
    );
}

export default Popup;