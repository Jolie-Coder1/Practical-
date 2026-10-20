import {
    createBankAccount,
    applyDiscount,
    tenPercentOff,
    fiveThousandOff
} from "./challenges.js";


let account = createBankAccount(10000);

console.log(account.deposit(5000));
console.log(account.withdraw(2000));
console.log("Current balance:", account.balance());


let prices = [10000, 30000, 60000, 100000];

console.log(
    "10% off:",
    applyDiscount(prices, tenPercentOff)
);

console.log(
    "5,000 off items over 50,000:",
    applyDiscount(prices, fiveThousandOff)
);
