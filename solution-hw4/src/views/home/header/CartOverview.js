import React, { useState, useEffect } from 'react';
import Popup from './Popup';

function CartOverview (props) {
    // props:
    // flavorsMap
    // cart
    // showPopup
    // setShowPopup
    // roundTwo
    const flavorsMap = props.flavorsMap;
    const cart = props.cart;
    const itemCnt = cart.length;
    let totalPrice = 0;
    for(let i = 0; i < itemCnt; i++) {
        totalPrice += cart[i].price;
    }
    totalPrice = props.roundTwo(totalPrice);
    let displayPrice = totalPrice ? totalPrice.toString() : "0.00";

    let itemTxt = "";
    if(itemCnt > 1) {
        itemTxt = `${itemCnt} items`;
    }
    else {
        itemTxt = `${itemCnt} item`;
    }

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
        // console.log("checking props.showPopup to be true");
        visibility = "visible";
        // show
        setTimeout(() => {
            // console.log("about to be false??");
            props.setShowPopup(false);
        }, 3000);        
    }

    return (
        <div>
            <a className="highlighted" href="#">
                CART
                <p id="cart-overview">
                    {itemTxt}
                    <br/>Total: ${displayPrice}
                </p>
            </a>    
            <Popup
            visibility={visibility}
            name={name}
            glazing={glazing}
            packSize={packSize}
            price={price}
            />
        </div>
    );
}

export default CartOverview;