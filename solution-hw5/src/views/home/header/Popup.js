import React from 'react';

function Popup (props) {
    // props:
    // flavorsMap
    // cart
    // showCart
    // setShowCart
    // showPopup
    // setShowPopup
    // roundTwo
    const flavorsMap = props.flavorsMap;
    const cart = props.cart;
    const itemCnt = cart.length;

    // popup info
    let name, glazing, packSize, price = null;
    if(itemCnt) {
        name = flavorsMap[cart[cart.length - 1].type];
        glazing = cart[cart.length - 1].glazing;
        packSize = cart[cart.length - 1].packSize;
        price = cart[cart.length - 1].price;
    }
    let visibility = "hidden";
    // whether to show popup, if true -> show for 3s
    if(props.showPopup) {
        visibility = "visible";
        // show
        setTimeout(() => {
            props.setShowPopup(false);
        }, 3000);        
    }

    // props:
    // visibility
    // name
    // glazing
    // packSize
    // price

    return (
        <div id="added-to-cart" className={`overlay ${visibility}`}>
            <div className="popup">
                <p>
                    Added to cart:
                    <br/><br/>
                    <b>{name}</b>
                    <br/>{glazing}
                    <br/>Pack of {packSize}
                    <br/>Price: ${price}
                </p>
            </div>
        </div>
    );
}

export default Popup;