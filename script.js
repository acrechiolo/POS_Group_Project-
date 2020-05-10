

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
    if (event.target.classList.contains("ibutton")) {
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
let checkoutTotalCash = document.querySelector(".cash-checkout-total-container");
let checkoutTotalCredit = document.querySelector(".credit-checkout-total-container");
let cashCheckoutExit = document.querySelector("#cashExitBtn");
let creditCheckoutExit = document.querySelector("#creditExitBtn");

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
        let cashCheckoutSub = document.createElement("p");
        cashCheckoutSub.innerText = `Subtotal: $${currentTotal.toFixed(2)}`;
        let cashCheckoutTax = document.createElement("p");
        cashCheckoutTax.innerText = `Sales Tax: $${cTax.toFixed(2)}`;
        let cashCheckoutTotal = document.createElement("p");
        cashCheckoutTotal.innerText = `Checkout Total: $${cTotal.toFixed(2)}`;
        checkoutTotalCash.append(cashCheckoutSub, cashCheckoutTax, cashCheckoutTotal);
        cashCheckoutExit.style.visibility = "visible";


    } else if (event.target.classList.contains("credit-checkout")) {
        creditContainer.style.display = "flex";
        let crTax = currentTotal * tax;
        let crTotal = crTax + currentTotal;
        let creditCheckoutSub = document.createElement("p");
        creditCheckoutSub.innerText = `Subtotal: $${currentTotal.toFixed(2)}`;
        let creditCheckoutTax = document.createElement("p");
        creditCheckoutTax.innerText = `Sales Tax: $${crTax.toFixed(2)}`;
        let creditCheckoutTotal = document.createElement("p");
        creditCheckoutTotal.innerText = `Checkout Total: $${crTotal.toFixed(2)}`;
        checkoutTotalCredit.append(creditCheckoutSub, creditCheckoutTax, creditCheckoutTotal);
        creditCheckoutExit.style.visibility = "visible";


    }
})


let changeGiven = document.querySelector(".change-due")
let cashForm = document.querySelector(".cash-form")
let cashReceipt = document.querySelector(".cash-receipt-container")
let receiptText = document.querySelector(".receipt")
let cashReceiptBtn = document.querySelector(".cash-receipt-button");

cashContainer.addEventListener("click", (event) => {
    let cashTendered = document.getElementById("cash-tendered").value;
    let cTax = currentTotal * tax;
    let cTotal = cTax + currentTotal;
    let changeDue = cashTendered - cTotal;

    if (event.target.classList.contains("cash-pay") && cashTendered >= cTotal) {
        changeGiven.innerText = `Change Due: $${changeDue.toFixed(2)}`;
        cashReceiptBtn.style.display = "flex";
    } else if (event.target.classList.contains("cash-pay") && cashTendered < cTotal) {
        //new code
        let notEnough = document.createElement("p");
        notEnough.classList.add("invalid-cash-amount")
        notEnough.innerText = "You don't have enough money!"
        //end new code
        changeGiven.append(notEnough);

    } else if (event.target.classList.contains("fa-receipt")) {
        event.preventDefault();
        cashReceipt.style.display = "flex";
        //NEW CODE -- DOESN'T WORK - DOESNT ADD ITEMS TO RECEIPT - ASK MITCH/KYLE!
        let cashItemsBox = document.createElement("div");
        cashItemsBox.classList.add("cash-items-box");
        let cashItemName = document.createElement("p");
        let cashItemProduct = event.target.getAttribute("data-product");
        cashItemName.innertext = `${cashItemProduct}`;
        let cashItemPrice = document.createElement("p");
        let cashItemProductPrice = event.target.getAttribute("data-amount");
        cashItemPrice.innerText = `${cashItemProductPrice}`;
        //END NEW CODE 
        let receiptTextCash = document.createElement("p");
        receiptTextCash.innerText =
            `Subtotal: $${currentTotal.toFixed(2)}
        Tax: $${cTax.toFixed(2)}
        Total: $${cTotal.toFixed(2)}
        Cash Tendered: $${cashTendered}
        Change Due: $${changeDue.toFixed(2)}`;
        receiptText.append(receiptTextCash);
        //new code -- DOESNT WORK - ASK MITCH, KYLE
        cashItemsBox.append(cashItemName, cashItemProduct);
        cashReceipt.append(cashItemsBox);
        //end new code
        console.log(receiptTextCash);
    } if (event.target.classList.contains("cash-checkout-exit-button")) {
        event.target.parentNode.remove();
    }
})

//EXIT BUTTON//

cashReceipt.addEventListener("click", (event) => {
    if (event.target.classList.contains("exit-button")) {
        event.target.parentNode.parentNode.remove();
    }
    // cashReceipt.reset();
});


let creditFormContainer = document.querySelector(".credit-form")
let InvalidCName = document.getElementById("invalidCardName");
let InvalidCNum = document.getElementById("invalidCardNum");
let InvalidCExp = document.getElementById("invalidCardExp");
let InvalidCCVV = document.getElementById("invalidCardCVV");
let paymentSuccessful = document.getElementById("paymentSuccess");
let remainingBal = document.getElementById("balance-remaining");


let creditForm = document.querySelector(".credit-form")
let creditReceipt = document.querySelector(".credit-receipt-container")
let receiptCreditText = document.querySelector(".credit-receipt")
let creditReceiptBtn = document.querySelector(".credit-receipt-button");

creditContainer.addEventListener("click", (event) => {
    let cTax = currentTotal * 0.06;
    let cTotal = cTax + currentTotal;
    if (event.target.classList.contains("credit-checkout-button")) {
        event.preventDefault();
        let cardNameLength = document.getElementById("cardName").value.length;
        let cardNumLength = document.getElementById("cardNum").value.length;
        let expMonth = document.getElementById("expMonth");
        let expMonthV = Number(expMonth.options[expMonth.selectedIndex].value);
        let expYear = document.getElementById("expYear");
        let expYearV = Number(expYear.options[expYear.selectedIndex].value);
        let cardCVVlength = document.getElementById("CVV").value.length;
        if (cardNameLength < 1) {
            InvalidCName.innerText = "Please enter your name";
        }
        if (cardNumLength < 15) {
            InvalidCNum.innerText = "Please enter valid 15-6 digit card number";
        } if (expMonthV < 5 && expYearV === 1) {
            InvalidCExp.innerText = "Your card is expired";
        } if (cardCVVlength < 3) {
            InvalidCCVV.innerText = "Please enter valid 3 digit validation number";
        } else {
            paymentSuccessful.innerText = "Thank you for your payment!";
            remainingBal.innerText = "Balance: $0.00";
            creditReceiptBtn.style.display = "flex";
            console.log(creTax);
        }
    } else if (event.target.classList.contains("fa-receipt")) {
        event.preventDefault();
        creditReceipt.style.display = "flex";
        let receiptTextcredit = document.createElement("p");
        receiptTextcredit.innerText =
            `Subtotal: $${currentTotal.toFixed(2)}
        Tax: $${cTax.toFixed(2)}
        Total: $${cTotal.toFixed(2)}
        Total Paid: $${cTotal.toFixed(2)}
        Balance Remaining: $0.00
        `;
        receiptCreditText.append(receiptTextcredit);

    }
});


creditReceipt.addEventListener("click", (event) => {
    if (event.target.classList.contains("credit-exit-button")) {
        event.target.parentNode.parentNode.remove();
    }
    // creditReceipt.reset();
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

