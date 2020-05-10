

//CART ADD UP
let mainItems = document.querySelector("main");
let subTotal = document.querySelector(".sub-total");
let salesTax = document.querySelector(".sales-tax");
let finalTotal = document.querySelector(".final-total");
let currentTotal = 0;
let tax = 0.06;
let cartBox = document.querySelector(".cart");
let itemBox = document.createElement("div");
let itemName = document.createElement("p");
let itemPrice = document.createElement("p");


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

let creditContainer = document.querySelector(".credit-form-container");
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


paymentOptions.addEventListener("click", (event) => {
    if (event.target.classList.contains("cash-checkout")) {
        cashContainer.style.display = "flex";
        let cTax = currentTotal * tax;
        let cTotal = cTax + currentTotal;
        checkoutTotalCash.innerText = `Checkout Total: $${cTotal.toFixed(2)}`;

    } else if (event.target.classList.contains("credit-checkout")) {
        creditContainer.style.display = "flex";
        let cTax = currentTotal * tax;
        let cTotal = cTax + currentTotal;
        checkoutTotalCredit.innerText = `Checkout Total: $${cTotal.toFixed(2)}`;

    }
})


//CASH CHANGE DUE FORM - NOT WORKING!!!!

let changeGiven = document.querySelector(".change-due")
let cashForm = document.querySelector(".cash-form")
let cashReceipt = document.querySelector(".cash-receipt-container")
let receiptText = document.querySelector(".receipt")

cashContainer.addEventListener("click", (event) => {
    let cashTendered = document.getElementById("cash-tendered").value;
    let cTax = currentTotal * tax;
    let cTotal = cTax + currentTotal;
    let changeDue = cashTendered - cTotal;
    if (event.target.classList.contains("cash-pay")) {
        event.preventDefault()
        if (cashTendered >= cTotal) {
            changeGiven.innerText = `Change Due: $${changeDue.toFixed(2)}`;
        } else {
            changeGiven.innerText = "You don't have enough money!";
        };
    } else if (event.target.classList.contains("cash-receipt-button")) {
        event.preventDefault()
        cashReceipt.style.display = "flex";

        receiptText.innerText =
            `Subtotal: $${currentTotal}
        Tax: $${cTax.toFixed(2)}
        Total: $${cTotal.toFixed(2)}
        Cash Tendered: $${cashTendered}
        Change Due: $${changeDue.toFixed(2)}`;


    }
    // return false;
    // cashForm.reset()

    // console.log(changeDue);

})



let creditReceiptContainer = document.querySelector(".credit-receipt-container");
// let creditReceipt = document.querySelector(".credit-receipt-container");
creditReceiptContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("credit-checkout")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        let sub = currentTotal += amount;
        subTotal.innerText = `Subtotal: $${sub.toFixed(2)}`;
        let taxTotal = sub * tax;
        salesTax.innerText = `Sales Tax: $${taxTotal.toFixed(2)}`;
        let tTotal = taxTotal + sub;
        finalTotal.innerText = `Current Total: $${tTotal.toFixed(2)}`;
        //cart, element div, 
        let creditReceipt = document.querySelector(".credit-receipt-container");
        // creditReceipt.classList.add("credit-receipt");
        //want to create and pull from the info above the cart product/price,

        //this syntax once broke everything

        //end broke
        // let itemName = document.createElement("p");
        // itemName.classList.add("p-name");
        // let itemPrice = document.createElement("p");
        // itemPrice.classList.add("p-price");
        // let product = event.target.getAttribute("data-product");
        // //append those selected items into a div
        // itemPrice.innerText = `$${amount.toFixed(2)}`;
        // itemName.innerText = `${product}`;
        // creditReceipt.append(itemName, itemPrice);
        // creditContainer.append(creditReceipt);
        // // this makes cart visible on mobile
        // creditContainer.style.display = "flex";

    }
});




//         let amountR = (event.target.getAttribute("data-amount"));
//         let itemNameR = document.createElement("p");
//         itemNameR.classList.add("p-name");
//         let itemPriceR = document.createElement("p");
//         itemPriceR.classList.add("p-price");
//         let productR = event.target.getAttribute("data-product");
//         //append those selected items into a div
//         itemPriceR.innerText = `$${amountR}`;
//         itemNameR.innerText = `${productR}`;
//         creditReceipt.append(itemNameR, itemPriceR);
//         creditReceiptContainer.append(creditReceipt);
//         console.log(amountR);

//         //display
//         creditReceiptContainer.style.display = "flex";
//     }
// })













// var text = document.getElementById('text');
//     text.value += ' after clicking';


      // changeGiven.innerText = "laksdflkajs";
        // let changeDiv = document.createElement("div");
        // changeDiv.classList.add("change-div");
        // let changeP = document.createElement("p");
        // changeP.classList.add("change-due");
        // changeDiv.append(changeP);
        // changeP.innerText = `Change due: $${changeDue.toFixed(2)}`;
        // cashContainer.append(changeDiv);
        // changeGiven.innerText = `Change due: $${changeDue.toFixed(2)}`;