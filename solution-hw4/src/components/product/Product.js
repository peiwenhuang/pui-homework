import React, { useState } from 'react';

function Product (props) {
    const product = props.product;
    const glazingOptions = props.glazingOptions;
    const packSizeOptions = props.packSizeOptions;

    const [price, setPrice] = useState(props.product.price);
    const flavor = product.name.split(" ")[0];

    return (
        <div className="product-card">
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="selection-container">
                <label htmlFor={`${flavor}-glazing`}>Glazing:</label>
                <div className="dropdown-container">
                    <select name="glazing" id={`${flavor}-glazing`}>
                        {
                            glazingOptions.map((glazing, j) => {
                                return (
                                    <option value={glazing}>{glazing}</option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="selection-container">
                <p>Pack size:</p>
                <fieldset id={`${flavor}-pack-size`}>
                    <div className="radio-set" id={`radio-set-${flavor}`}>
                        {
                            packSizeOptions.map((packSize, k) => {
                                return (
                                    <div>
                                        <input type="radio"
                                        value={packSize}
                                        name={`${flavor}-pack-size`}
                                        id={`${flavor}-pack-size-${packSize}`}
                                        />
                                        <label
                                        htmlFor={`${flavor}-pack-size-${packSize}`}>
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
                <p id={`${flavor}-price`}>$ {price}</p>
                <button className="highlighted"
                id={`${flavor}-add-to-cart`}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;