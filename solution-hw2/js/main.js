// const declaration
const flavors = [
    "original", 
    "apple", 
    "raisin", 
    "walnut", 
    "doubleChocolate", 
    "strawberry"
];
const flavorsMap = {
    "original": "Original Cinammon Roll", 
    "apple": "Apple Cinammon Roll", 
    "raisin": "Raisin Cinammon Roll", 
    "walnut": "Walnut Cinammon Roll", 
    "doubleChocolate": "Double Chocolate Cinammon Roll", 
    "strawberry": "Strawberry Cinammon Roll"
}
const prices = [2.49, 3.49, 2.99, 3.49, 3.99, 3.99];
const numGlazing = 4;
const glazingOptions = {
    "types": ["Keep Orginal", "Sugar Milk", "Vanilla Milk", "Double Chocolate"],
    "prices": [0, 0, 0.5, 1.5]
};
const packSizes = [1, 3, 6, 12];

// Roll object product
function Roll(type, price, glazing, packSize) {
    this.type = type;
    this.price = price;
    this.glazing = glazing;
    this.packSize = packSize;
}
function clearCurrentRoll(currentRoll) {
    currentRoll.price = 0;
    currentRoll.glazing = "";
    currentRoll.packSize = 1;
}
// shopping cart
function Cart(queue, itemCnt, total) {
    this.queue = queue;
    this.itemCnt = itemCnt;
    this.total = total;
}

// product in selection
let selections = [];
for (let i = 0; i < flavors.length; i++) {
    let currentRoll = new Roll (flavors[i], prices[i], glazingOptions.types[0], 1);
    selections.push(currentRoll);
}
// cart
let shoppingCart = new Cart ([], 0, 0);

// compute total price (rounded to 2 decimals)
function roundTwo(num) {
    return Math.round(num * 100) / 100;
}
function computePrice(base, glazing, size) {
    return roundTwo(((base + glazing) * size));
}

function glazingChange(elm) {
    // current type in focus
    const type = elm.id.split("-")[0];
    const rollIdx = flavors.indexOf(type);
    
    // selected glazing
    selections[rollIdx].glazing = glazingOptions.types[elm.selectedIndex];

    // compute price
    selections[rollIdx].price = computePrice(prices[rollIdx], glazingOptions.prices[elm.selectedIndex], selections[rollIdx].packSize);

    // change price display
    let price = document.getElementById(type + "-price");
    price.innerHTML = "$ " + selections[rollIdx].price;
}

function packSizeChange(elm) {
    // current type in focus
    const type = elm.id.split("-")[0];
    const rollIdx = flavors.indexOf(type);

    // selected pack size
    selections[rollIdx].packSize = Number(elm.value);

    // compute price
    const glazingPrice = glazingOptions.prices[glazingOptions.types.indexOf(selections[rollIdx].glazing)];
    selections[rollIdx].price = computePrice(prices[rollIdx], glazingPrice, selections[rollIdx].packSize);

    // change price display
    let price = document.getElementById(type + "-price");
    price.innerHTML = "$ " + selections[rollIdx].price;
};

function popupMsg(name, glazing, size, price) {
    // adding new text in <p> (ref: https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom)
    let popupText = document.getElementById("popup-text");
    // clearing previous content
    while(popupText.childElementCount > 1) {
        popupText.removeChild(popupText.lastChild);
    }

    // title
    let textTitle = document.createElement("p");
    textTitle.innerHTML = name;
    textTitle.style.fontWeight = "bold";
    popupText.appendChild(textTitle);

    // glazing
    let textGlazing = document.createElement("p");
    textGlazing.innerHTML = glazing + " Glazing";
    textGlazing.style.fontWeight = "normal";
    popupText.appendChild(textGlazing);

    // size
    let textSize = document.createElement("p");
    textSize.innerHTML = "Pack of " + size.toString();
    popupText.appendChild(textSize);

    // price
    let textPrice = document.createElement("p");
    textPrice.innerHTML = "Price: $" + price.toString();
    popupText.appendChild(textPrice);
}

function showPopup() {
    let popup = document.getElementById("added-to-cart");
    
    // open popup
    setTimeout(() => {
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
    }, 0);
    // close popup
    setTimeout(() => {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }, 3000);
}

function cartDisplay(itemCnt, total) {
    let cartOverview = document.getElementById("cart-overview");
    // clearing previous content
    while(cartOverview.childElementCount) {
        cartOverview.removeChild(cartOverview.lastChild);
    }

    // number of items
    let itemTxt = "1 item";
    if(itemCnt > 1) {
        itemTxt = itemCnt + " items";
    }
    // create <p> & append to document
    let itemElm = document.createElement("p");
    itemElm.innerHTML = itemTxt;
    let totalElm = document.createElement("p");
    totalElm.innerHTML = "Total: $" + total.toString();
    cartOverview.appendChild(itemElm);
    cartOverview.appendChild(totalElm);
}

function addToCart(elm) {
    // current type in focus
    const type = elm.id.split("-")[0];
    const rollIdx = flavors.indexOf(type);

    // add Roll to cart
    shoppingCart.queue.push(new Roll(selections[rollIdx].type, selections[rollIdx].price, selections[rollIdx].glazing, selections[rollIdx].packSize));
    shoppingCart.itemCnt += 1;
    shoppingCart.total = roundTwo(shoppingCart.total + selections[rollIdx].price);

    // console.log("shopping cart: ", shoppingCart);

    // show popup
    // JS animation (ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3)
    popupMsg(flavorsMap[selections[rollIdx].type], selections[rollIdx].glazing, selections[rollIdx].packSize, selections[rollIdx].price);
    showPopup();

    // display cart items
    cartDisplay(shoppingCart.itemCnt, shoppingCart.total);

    // clear Roll in selections
    clearCurrentRoll(selections[rollIdx]);
}

// Pre-process
// add options to glazing (ref: https://stackoverflow.com/questions/8674618/adding-options-to-select-with-javascript)
for (let i = 0; i < flavors.length; i++) {
    for (let j = 0; j < numGlazing; j++) {
        // get <select> element
        let selectItem = document.getElementById(flavors[i] + "-glazing");
        
        // create <option> & append to <select>
        let optionItem = document.createElement("option");
        optionItem.value = glazingOptions.prices[j];
        optionItem.innerHTML = glazingOptions.types[j];
        selectItem.appendChild(optionItem);
    }
}