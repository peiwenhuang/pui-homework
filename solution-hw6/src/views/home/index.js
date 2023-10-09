import React, { useState, useEffect } from 'react';

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
        type: "original",
        price: 2.49,
        glazing: "Keep Orginal",
        packSize: 1
    },
    {
        imgSrc: "./assets/products/apple-cinnamon-roll.jpg",
        type: "apple",
        price: 3.49,
        glazing: "Keep Orginal",
        packSize: 1
    },
    {
        imgSrc: "./assets/products/raisin-cinnamon-roll.jpg",
        type: "raisin",
        price: 2.99,
        glazing: "Keep Orginal",
        packSize: 1
    },
    {
        imgSrc: "./assets/products/walnut-cinnamon-roll.jpg",
        type: "walnut",
        price: 3.49,
        glazing: "Keep Orginal",
        packSize: 1
    },
    {
        imgSrc: "./assets/products/double-chocolate-cinnamon-roll.jpg",
        type: "doubleChocolate",
        price: 3.99,
        glazing: "Keep Orginal",
        packSize: 1
    },
    {
        imgSrc: "./assets/products/strawberry-cinnamon-roll.jpg",
        type: "strawberry",
        price: 3.99,
        glazing: "Keep Orginal",
        packSize: 1
    }
];

function Home () {
    const retrieve = () => {
        return JSON.parse(localStorage.getItem("cartData"));
    }
    const update = () => {
        localStorage.setItem("cartData", JSON.stringify(cart));
    }

    // constructor
    const [cart, setCart] = useState(retrieve() || []);
    const [showCart, setShowCart] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const addtoCart = (type, glazing, packSize, price) => {
        let idx = productDetails.map(e => { return e.type }).indexOf(type);
        setCart([
            ...cart,
            {
                type: type,
                glazing: glazing,
                packSize: packSize,
                price: price,
                imgSrc: productDetails[idx].imgSrc
            }
        ]);
        setShowPopup(true);
    };

    const removefromCart = (idx) => {
        // remove item from cart
        setCart(cart.filter((e, i) => i !== idx ));
    }

    const toggleShowCart = (e) => {
        e.preventDefault();
        setShowCart(!showCart);
    }

    useEffect(() => {
        update();
        console.log("after update, localStorage: ", retrieve());
    }, [cart]);

    return (
        <main>
            <Header
            flavorsMap={flavorsMap}
            cart={cart}
            toggleShowCart={toggleShowCart}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            />
            <ProductList
            showCart={showCart}
            cart={cart}
            removefromCart={removefromCart}
            productDetails={productDetails}
            flavorsMap={flavorsMap}
            addtoCart={addtoCart}
            roundTwo={roundTwo}
            />
        </main>
        
    );
}

export default Home;