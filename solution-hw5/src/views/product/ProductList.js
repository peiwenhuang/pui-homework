import React, { useState } from 'react';
import Roll from './Roll';

function ProductList (props) {
    // props:
    // (this)
    // productDetails (type, imgSrc)
    // (Roll)
    // flavorsMap
    // addtoCart
    // roundTwo

    return (
        <div className='container'>
            <main className="product-container">
                <ul className="product-list">

                    {
                        props.productDetails.map((product, i) => {
                            return (
                                <li>
                                    <Roll
                                    type={product.type}
                                    imgSrc={product.imgSrc}
                                    flavorsMap={props.flavorsMap}
                                    addtoCart={props.addtoCart}
                                    roundTwo={props.roundTwo}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </main>
        </div>
    );
};

export default ProductList;