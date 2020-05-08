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
let cartTotal = document.querySelector(".cart-total");
let salesTax = document.querySelector(".sales-tax");
let currentTotal = 0;

mainItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"))
        currentTotal += amount;
        cartTotal.innerText = `Current Total: $${currentTotal.toFixed(2)}`
    }
})