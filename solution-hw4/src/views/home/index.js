import React from 'react';
import Header from "./Header";
import ProductList from '../product/ProductList';

const productDetails = [
    {
        imgSrc: "./assets/products/original-cinnamon-roll.jpg",
        name: "Original cinnamon roll",
        price: 2.49,
    },
    {
        imgSrc: "./assets/products/apple-cinnamon-roll.jpg",
        name: "Apple cinnamon roll",
        price: 3.49
    },
    {
        imgSrc: "./assets/products/raisin-cinnamon-roll.jpg",
        name: "Raisin cinnamon roll",
        price: 2.99
    },
    {
        imgSrc: "./assets/products/walnut-cinnamon-roll.jpg",
        name: "Walnut cinnamon roll",
        price: 3.49
    },
    {
        imgSrc: "./assets/products/double-chocolate-cinnamon-roll.jpg",
        name: "Double-chocolate cinammon roll",
        price: 3.99
    },
    {
        imgSrc: "./assets/products/strawberry-cinnamon-roll.jpg",
        name: "Strawberry cinammon roll",
        price: 3.99
    }
];
const glazingOptions = [
    "Keep Original",
    "Sugar Milk",
    "Vanilla Milk",
    "Double Chocolate"
];
const packSizeOptions = [1, 3, 6, 12];


function Home () {
    return (
        <div>
            <Header />
            <ProductList
            productDetails={productDetails}
            glazingOptions={glazingOptions}
            packSizeOptions={packSizeOptions}
            />
        </div>
        
    );
}

export default Home;