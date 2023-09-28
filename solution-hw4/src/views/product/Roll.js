import React, { useState, useEffect } from 'react';

// DEFINE global variables
const flavors = [
    "original", 
    "apple", 
    "raisin", 
    "walnut", 
    "doubleChocolate", 
    "strawberry"
];
const basePrices = [2.49, 3.49, 2.99, 3.49, 3.99, 3.99];
const glazings = ["Keep Orginal", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
const glazingPrices = [0, 0, 0.5, 1.5];
const packSizes = [1, 3, 6, 12];
// ENDOF global variables

function Roll (props) {
    // props:
    // type, imgSrc
    // flavorsMap
    // addtoCart
    // roundTwo
    const type = props.type;
    const name = props.flavorsMap[type];
    const [price, setPrice] = useState(basePrices[flavors.indexOf(type)]);
    const [glazing, setGlazing] = useState(glazings[0]);
    const [packSize, setPackSize] = useState(packSizes[0]);

    const onGlazingChange = (elm) => {
        // console.log("in onGlazingChange: ", elm);
        // console.log("native event selectedIndex: ", elm.nativeEvent.target.selectedIndex);

        // update glazing
        setGlazing(glazings[elm.nativeEvent.target.selectedIndex]);
    };

    const onPackSizeChange = (elm) => {
        // console.log("in onPackSizeChange: ", elm.nativeEvent.target.value);
        // update packSize
        setPackSize(Number(elm.nativeEvent.target.value));
    };
    
    useEffect(() => {
        // console.log("new glazing: ", glazing);
        // console.log("new packSize: ", packSize);
        // update price
        const basePrice = basePrices[flavors.indexOf(type)];
        const glazingPrice = glazingPrices[glazings.indexOf(glazing)];  
        
        // console.log("basePrice: ", basePrice);
        // console.log("glazingPrice: ", glazingPrice);
        // console.log("packSize: ", packSize);
        // console.log("updatePrice(): ", updatePrice(basePrice, glazingPrice, packSize));
        setPrice(updatePrice(basePrice, glazingPrice, packSize));
    }, [glazing, packSize]);

    const updatePrice = (basePrice, glazingPrice, packSize) => {
        return props.roundTwo(((basePrice + glazingPrice) * packSize));
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
                    onChange={onGlazingChange}>
                        {
                            glazings.map((glazingOption, i) => {
                                return (
                                    <option value={glazingOption}>{glazingOption}</option>
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
                            packSizes.map((packSize, i) => {
                                return (
                                    <div>
                                        <input type="radio"
                                        value={packSize}
                                        name={`${type}-pack-size`}
                                        id={`${type}-pack-size-${packSize}`}
                                        onClick={onPackSizeChange}
                                        />
                                        <label
                                        htmlFor={`${type}-pack-size-${packSize}`}>
                                            {packSize}
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