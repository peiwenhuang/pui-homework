import React, { useState, useEffect } from 'react';

// QUESTIONS:
// hover packSize button background change?

// DEFINE global variables
const flavors = [
    "original", 
    "apple", 
    "raisin", 
    "walnut", 
    "doubleChocolate", 
    "strawberry"
];
const glazings = ["Keep Orginal", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
const packSizes = [1, 3, 6, 12];
// ENDOF global variables

function Roll (props) {
    // props:
    // type, imgSrc, price
    // flavorsMap
    // addtoCart
    // roundTwo
    // updateGlazing
    // updatePackSize
    const type = props.type;
    const name = props.flavorsMap[type];
    const price = props.price;
    const glazing = props.glazing;
    const packSize = props.packSize;

    const onGlazingChange = (elm) => {
        // update glazing
        props.updateGlazing(type, glazings[elm.nativeEvent.target.selectedIndex]);
    };

    const onPackSizeChange = (elm) => {
        // update packSize
        props.updatePackSize(type, Number(elm.nativeEvent.target.value));
    };

    return (
        <div className="product-card">
            <img src={props.imgSrc} alt={name} />
            <h3>{name}</h3>
            <div className="selection-container">
                <label htmlFor={`${type}-glazing`}>Glazing:</label>
                <div className="dropdown-container">
                    <select
                    name="glazing"
                    id={`${type}-glazing`}
                    onChange={onGlazingChange}
                    value={glazing}>
                        {
                            glazings.map((glazingOption, key) => {
                                return (
                                    <option
                                    value={glazingOption}>
                                        {glazingOption}
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="selection-container">
                <p>Pack size:</p>
                <fieldset id={`${type}-pack-size`}>
                    <div className="radio-set" id={`radio-set-${type}`}>
                        {
                            packSizes.map((curSize, key) => {
                                return (
                                    <div>
                                        <input type="radio"
                                        value={curSize}
                                        name={`${type}-pack-size`}
                                        id={`${type}-pack-size-${curSize}`}
                                        onChange={onPackSizeChange}
                                        />
                                        <label
                                        style={{
                                            backgroundColor: packSize === curSize ? "#cccccc": "transparent"
                                        }}
                                        htmlFor={`${type}-pack-size-${curSize}`}>
                                            {curSize}
                                        </label>
                                    </div>
                                );
                            })
                        }
                    </div>
                </fieldset>
            </div>
            <div className="selection-container action-container">
                <p id={`${type}-price`}>$ {price}</p>
                <button className="highlighted"
                id={`${type}-add-to-cart`}
                onClick={() => {
                    props.addtoCart(type, glazing, packSize, price);
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Roll;