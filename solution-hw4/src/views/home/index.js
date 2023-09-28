import React, { useState } from 'react';

// view
import Header from './header/Header';
import ProductList from '../product/ProductList';

// DEFINE global variables

const flavorsMap = {
    "original": "Original Cinammon Roll", 
    "apple": "Apple Cinammon Roll", 
    "raisin": "Raisin Cinammon Roll", 
    "walnut": "Walnut Cinammon Roll", 
    "doubleChocolate": "Double Chocolate Cinammon Roll", 
    "strawberry": "Strawberry Cinammon Roll"
}
// ENDOF global variables

// DEIFINE utility functions
function roundTwo(num) {
    return Math.round(num * 100) / 100;
}
// ENDOF utility functions

const productDetails = [
    {
        imgSrc: "./assets/products/original-cinnamon-roll.jpg",
        type: "original"
    },
    {
        imgSrc: "./assets/products/apple-cinnamon-roll.jpg",
        type: "apple"
    },
    {
        imgSrc: "./assets/products/raisin-cinnamon-roll.jpg",
        type: "raisin",
    },
    {
        imgSrc: "./assets/products/walnut-cinnamon-roll.jpg",
        type: "walnut",
    },
    {
        imgSrc: "./assets/products/double-chocolate-cinnamon-roll.jpg",
        type: "doubleChocolate"
    },
    {
        imgSrc: "./assets/products/strawberry-cinnamon-roll.jpg",
        type: "strawberry"
    }
];

function Home () {
    // constructor
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const addtoCart = (type, glazing, packSize, price) => {
        setCart([
            ...cart,
            {
                type: type,
                glazing: glazing,
                packSize: packSize,
                price: price
            }
        ]);
        setShowPopup(true);
    };
    

    return (
        <main>
            <Header
            flavorsMap={flavorsMap}
            cart={cart}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            roundTwo={roundTwo}
            />
            <ProductList
            productDetails={productDetails}
            flavorsMap={flavorsMap}
            addtoCart={addtoCart}
            roundTwo={roundTwo}
            />
        </main>
        
    );
}

export default Home;