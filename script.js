

//CART ADD UP
let mainItems = document.querySelector("main");
let subTotal = document.querySelector(".sub-total");
let salesTax = document.querySelector(".sales-tax");
let finalTotal = document.querySelector(".final-total");
let currentTotal = 0;
let tax = 0.06;
let cartBox = document.querySelector(".cart");


mainItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        let sub = currentTotal += amount;
        subTotal.innerText = `Subtotal: $${sub.toFixed(2)}`;
        let taxTotal = sub * tax;
        salesTax.innerText = `Sales Tax: $${taxTotal.toFixed(2)}`;
        let tTotal = taxTotal + sub;
        finalTotal.innerText = `Current Total: $${tTotal.toFixed(2)}`;
        //cart, element div, 
        let itemBox = document.createElement("div");
        itemBox.classList.add("item-box");
        //want to create and pull from the info above the cart product/price,
        let itemName = document.createElement("p");
        itemName.classList.add("p-name");
        let itemPrice = document.createElement("p");
        itemPrice.classList.add("p-price");
        let product = event.target.getAttribute("data-product");
        //append those selected items into a div
        itemPrice.innerText = `${amount}`;
        itemName.innerText = `${product}`;
        itemBox.append(itemName, itemPrice);
        cartBox.append(itemBox);
    }
})



