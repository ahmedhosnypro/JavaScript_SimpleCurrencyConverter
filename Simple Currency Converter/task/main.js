let input = require('sync-input');

let currencies = {
    USD: 1, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
What do you want to convert?`);

let from = input("From:").toUpperCase().trim();
if (!(from in currencies)) {
    console.log("Unknown currency");
    return;
}

let to = input("To:").toUpperCase().trim();
if (!(to in currencies)) {
    console.log("Unknown currency");
    return;
}

let amount = input("Amount:");
if (amount < 1) {
    console.log("The amount can not be less than 1.")
    return;
} else if (isNaN(amount)) {
    console.log("The amount has to be a number.");
    return;
}

console.log(`Result: ${amount} ${from} equals ${((1 / currencies[from]) * (currencies[to] * amount)).toFixed(4)} ${to}`);