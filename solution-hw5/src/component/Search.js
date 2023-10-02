import React, { useState, useEffect } from 'react';

import Sort from './Sort';

function Search (props) {
    // creating search bar with react (ref: https://upmostly.com/tutorials/how-to-create-a-search-bar-in-react)

    // props
    // filter
    // queryFilter
    // sortBy
    const [value, setValue] = useState("");
    const onSearchSubmit = () => {
        props.queryFilter(value);
    };

    return (
        <span className="search-sort-container">
            <span className="search-input">
                <input
                type="text"
                onChange={(elm) => {
                    setValue(elm.target.value);
                }}/>
                <button
                type="submit"
                onClick={onSearchSubmit}>
                    Search
                </button>
            </span>
            <Sort
            sortBy={props.sortBy}
            />
        </span>
    );
}

export default Search;