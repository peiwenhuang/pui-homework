import React, { useState, useEffect } from 'react';
import Popup from './Popup';

function CartOverview (props) {
    // props:
    // flavorsMap
    // product
    // cart (type, glazing, packSize, price, imgSrc)
    // removefromCart
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

    const cartContent = () => {
        if(!itemCnt) {
            return (
                <div className='info-msg'>
                    <p>The cart is empty!</p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="cart-overview">
                        <h2>Shopping Cart ({itemTxt})</h2>
                        <h2>Total: ${displayPrice}</h2>
                    </div>
                    <ul className="cart-item-list">
                        {
                            cart.map((item, key) => {
                                let name = flavorsMap[item.type];
                                return (
                                    <li>
                                        <img src={item.imgSrc} alt={name} />
                                        <h3>{name}</h3>
                                        <h3>Glazing: {item.glazing}</h3>
                                        <h3>Pack Size: {item.packSize}</h3>
                                        <h3><b>${item.price}</b></h3>
                                        
                                        <button
                                        onClick={() => {
                                            props.removefromCart(key);
                                        }}>
                                            Remove
                                        </button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className="cart-container">
            {cartContent()}
        </div>
    );
}

export default CartOverview;