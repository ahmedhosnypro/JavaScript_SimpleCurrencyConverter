let input = require('sync-input');

let currencies = {
    USD: 1, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

while (true) {
    switch (readCommand()) {
        case  1:
            while (true) {
                if (convertCurrency()) {
                    break;
                }
            }
            break;
        case  2:
            console.log("Have a nice day!");
            return;
        default:
            console.log("Unknown input");
            break;
    }
}

function readCommand() {
    let choice = input(`What do you want to do?
1-Convert currencies 2-Exit program
`);

    if (1 <= choice <= 2) {
        return Number(choice);
    } else {
        console.log("Unknown input");
        return readCommand();
    }
}

function convertCurrency() {
    let from = input(`What do you want to convert?
From: `).toUpperCase().trim();
    if (!(from in currencies)) {
        console.log("Unknown currency");
        return false;
    }

    let to = input("To: ").toUpperCase().trim();
    if (!(to in currencies)) {
        console.log("Unknown currency");
        return false;
    }

    let amount = input("Amount: ");
    if (amount < 1) {
        console.log("The amount can not be less than 1.")
        return false;
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number.");
        return false;
    }

    console.log(`Result: ${amount} ${from} equals ${((1 / currencies[from]) * (currencies[to] * amount)).toFixed(4)} ${to}`);
    return true;
}