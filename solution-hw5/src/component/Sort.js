import React, { useState, useEffect } from 'react';

function Sort (props) {
    // props:
    // sortBy
    return (
        <span className="sort-dropdown">
            <label htmlFor="sort">sort by:</label>
            <span className='dropdown-container'>
                <select
                name="sort"
                id="sort"
                onChange={props.sortBy} >
                    <option value="name">Name</option>
                    <option value="basePrice">Base Price</option>
                </select>
            </span>
        </span>
    );
}

export default Sort;