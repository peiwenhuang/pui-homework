import React, { useEffect, useState } from 'react';

// view
import Search from '../../component/Search';
import CartOverview from '../home/header/CartOverview';
import Roll from './Roll';

// DEFINE global variables
const basePriceMap = {
    "original": 2.49,
    "apple": 3.49, 
    "raisin": 2.99,
    "walnut": 3.49,
    "doubleChocolate": 3.99, 
    "strawberry": 3.99
};
const glazingMap = {
    "Keep Orginal": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
}
// ENDOF global variables

function ProductList (props) {
    // props:
    // (this)
    // showCart
    // productDetails (type, imgSrc, price, glazing, packSize)
    // (CartOverview)
    // cart
    // removefromCart
    // (Roll)
    // flavorsMap
    // addtoCart
    // roundTwo
    const productCnt = props.productDetails.length;
    const [products, setProducts] = useState(props.productDetails);
    const [filter, setFilter] = useState(() => {
        let temp = new Array(productCnt);
        for (let i = 0; i < productCnt; i++) {
            temp[i] = true;
        }
        return temp;
    });

    const updateGlazing = (type, newGlazing) => {
        let prodTemp = [...products];
        let idx = getIdx(type);
        prodTemp[idx].glazing = newGlazing;
        prodTemp[idx].price = computePrice(type, newGlazing, prodTemp[idx].packSize);
        setProducts(prodTemp);
    }

    const updatePackSize = (type, newPackSize) => {
        let prodTemp = [...products];
        let idx = getIdx(type);
        prodTemp[idx].packSize = newPackSize;
        prodTemp[idx].price = computePrice(type, prodTemp[idx].glazing, newPackSize);
        setProducts(prodTemp);
    }

    const computePrice = (type, newGlazing, newPackSize) => {
        // update price
        const basePrice = basePriceMap[type];
        const glazingPrice = glazingMap[newGlazing];
        return  props.roundTwo(((basePrice + glazingPrice) * newPackSize));
    }

    const getIdx = (type) => {
        return products.map(e => { return e.type }).indexOf(type);
    }

    const queryFilter = (query) => {
        let newFilter = new Array (productCnt);
        for(let i = 0; i < productCnt; i++) {
            // lower case query & product name + check if product name contains query
            if(!props.flavorsMap[products[i].type].toLowerCase().includes(query.toLowerCase())) {
                // set filter to false if not contain
                newFilter[i] = false;
            }
            else {
                newFilter[i] = true;
            }
        }
        setFilter(newFilter);
    };

    const sortBy = (elm) => {
        const criterion = elm.nativeEvent.target.value;
        console.log("criterion: ", criterion);
        // copy productDetails
        let prodSort = products.map(elm => elm);
        // add filter/mapped name to array to be sorted
        for(let i = 0; i < productCnt; i++) {
            prodSort[i].filter = filter[i];
            prodSort[i].name = props.flavorsMap[products[i].type];
        }
        // sort array
        if(criterion === "name") {
            prodSort.sort((a, b) =>
                a.name > b.name ? 1: -1
            );
        }
        else if(criterion === "basePrice") {
            prodSort.sort((a, b) =>
                basePriceMap[a.type] > basePriceMap[b.type] ? 1: -1
            );
        }
        console.log("after sorting: ", prodSort);
        // extract filter and setFilter
        setFilter(() => {
            let newFilter = [...filter];
            for(let i = 0; i < productCnt; i++) {
                newFilter[i] = [prodSort[i].filter];
            }
            return newFilter;
        });
        setProducts(prodSort);
    }

    const cartView = () => {
        if(props.showCart) {
            return (
                <CartOverview
                flavorsMap={props.flavorsMap}
                cart={props.cart}
                removefromCart={props.removefromCart}
                roundTwo={props.roundTwo}/>
            );
        }
        else {
            return null;
        }
    }

    const noContent = () => {
        let match = false;
        for(let i = 0; i < filter.length; i++) {
            if(filter[i]) {
                match = true;
                break;
            }
        }
        if(!match) {
            return (
                <div className='info-msg'>
                    <p>No Match!</p>
                </div>
            );
        }
        else {
            return null;
        }
    };

    return (
        <div className="container">
            <main className="product-container">
                <Search
                filter={filter}
                queryFilter={queryFilter}
                sortBy={sortBy}
                />
                {cartView()}
                {noContent()}
                <ul className="product-list">

                    {
                        products.map((product, i) => {
                            if(filter[i]) {
                                return (
                                    <li>
                                        <Roll
                                        type={product.type}
                                        imgSrc={product.imgSrc}
                                        price={product.price}
                                        glazing={product.glazing}
                                        packSize={product.packSize}
                                        flavorsMap={props.flavorsMap}
                                        addtoCart={props.addtoCart}
                                        roundTwo={props.roundTwo}
                                        updateGlazing={updateGlazing}
                                        updatePackSize={updatePackSize}
                                        />
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </main>
        </div>
    );
};

export default ProductList;