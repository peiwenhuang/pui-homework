import React, { useState } from 'react';
import Product from './Product';

function ProductList (props) {
    const [productDetails, setProductDetails] = useState(props.productDetails);

    return (
        <div className='container'>
            <main className="product-container">
                <ul className="product-list">

                    {
                        productDetails.map((product, i) => {
                            return (
                                <li>
                                    <Product
                                    product={product}
                                    glazingOptions={props.glazingOptions}
                                    packSizeOptions={props.packSizeOptions}
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