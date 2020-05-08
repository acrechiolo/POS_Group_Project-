// let vendingMachine = document.querySelector(".vending-machine");
// let total = document.querySelector(".amount-due");
// let currentTotal = 0;

// vendingMachine.addEventListener("click", (event) => {
//     if (event.target.classList.contains("button")) {
//         let amount = Number(event.target.getAttribute("data-amount"))
//         currentTotal += amount;
//         total.innerText = `Total: $${currentTotal.toFixed(2)}`
//     }
// })

let mainItems = document.querySelector("main");
let subTotal = document.querySelector(".sub-total");
let salesTax = document.querySelector(".sales-tax");
let finalTotal = document.querySelector(".final-total");
let currentTotal = 0;
let tax = 0.06;

mainItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"))
        let sub = currentTotal += amount;
        subTotal.innerText = `Sub-Total: $${sub.toFixed(2)}`;
        let taxTotal = sub * tax;
        salesTax.innerText = `Sales Tax: $${taxTotal.toFixed(2)}`;

    }
})