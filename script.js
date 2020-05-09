

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
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        //this syntax once broke everything
        let dIcon = document.createElement("i");
        dIcon.classList.add("fas", "fa-times");
        dIcon.setAttribute("data-amount", amount);
        //end broke
        let itemName = document.createElement("p");
        itemName.classList.add("p-name");
        let itemPrice = document.createElement("p");
        itemPrice.classList.add("p-price");
        let product = event.target.getAttribute("data-product");
        //append those selected items into a div
        itemPrice.innerText = `$${amount.toFixed(2)}`;
        itemName.innerText = `${product}`;
        deleteButton.append(dIcon);
        itemBox.append(deleteButton, itemName, itemPrice);
        cartBox.append(itemBox);
        // this makes cart visible on mobile
        cartBox.style.display = "flex";
    }
});

let formContainer = document.querySelector(".form-container");
let cashContainer = document.querySelector(".cash-form-container");
let creditTotal = document.querySelector(".credit-total");
let paymentOptions = document.querySelector(".payment-options");
let checkoutTotalCash = document.querySelector(".cash-checkout-total");
let checkoutTotalCredit = document.querySelector(".credit-checkout-total");

// let paymentButtons = document.querySelector(".payment-button-container")


cartBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-times")) {
        let newSub = currentTotal -= event.target.getAttribute("data-amount");
        subTotal.innerText = ` Subtotal: $${newSub.toFixed(2)}`;
        let newTax = newSub * tax;
        salesTax.innerText = `Sales Tax: $${newTax.toFixed(2)}`;
        let newTotal = newSub + newTax;
        finalTotal.innerText = `Current Total: $${newTotal.toFixed(2)}`;
        event.target.parentNode.parentNode.remove();
    }

});


cartBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("continue-checkout")) {
        paymentOptions.style.display = "flex";
    }
});

// let cTotal = `${currentTotal * tax + currentTotal}`;
//         console.log(cTotal);



paymentOptions.addEventListener("click", (event) => {
    if (event.target.classList.contains("cash-checkout")) {
        cashContainer.style.display = "flex";
        let cTax = currentTotal * tax;
        let cTotal = cTax + currentTotal;
        checkoutTotalCash.innerText = `Checkout Total: $${cTotal.toFixed(2)}`;

    } else if (event.target.classList.contains("credit-checkout")) {
        formContainer.style.display = "flex";
        let cTax = currentTotal * tax;
        let cTotal = cTax + currentTotal;
        checkoutTotalCredit.innerText = `Checkout Total: $${cTotal.toFixed(2)}`;

    }
})




// cartBox.addEventListener("click", (event) => {
//     if (event.target.classList.contains("continue-checkout")) {
//         formContainer.style.display = "flex";
//     }
// })



// creditTotal.innerText = `Current Total: $${ finalTotal } `;






// // formContainer.addEventListener("click", (event) => {
// //     if (event.target.classList.contains("checkout-button")) {
// //         formContainer.style.display = "flex";
// //     }
// // })

// function openForm() {
//     formContainer.style.display = "block";
// }
// function closeForm() {
//     document.querySelector("").style.display = "none";
// }

// formContainer.addEventListener("click", openForm);




// // const addFunc = () => {
// //     formContainer.style.display = "flex";
// // }

// // formContainer.addEventListener("click", addFunc)

// // DD submit after reset
// //display();
// //form.reset();
// //formContainer.style.display = "none";
