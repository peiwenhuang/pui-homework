import React, { useState } from 'react';

// create a Roll component that has type, price, glazing and packSize options. 
function Roll (props) {
    const [type, setType] = useState(props.type);
    const [price, setPrice] = useState(props.price);
    const [glazing, setGlazing] = useState(props.glazing);

    

};

export default Roll;