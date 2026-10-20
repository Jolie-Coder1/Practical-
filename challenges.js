export function createBankAccount(initial) {
    let accountBalance = initial;

    function deposit(amount) {
        if (amount > 0) {
            accountBalance += amount;
            return "Deposit successful";
        }
        return "Invalid deposit amount";
    }

    function withdraw(amount) {
        if (amount <= 0) {
            return "Invalid withdrawal amount";
        }

        if (amount > accountBalance) {
            return "Insufficient balance";
        }

        accountBalance -= amount;
        return "Withdrawal successful";
    }

    function balance() {
        return accountBalance;
    }

    return { deposit, withdraw, balance };
}

export function applyDiscount(prices, rule) {
    let discountedPrices = [];

    for (let price of prices) {
        discountedPrices.push(rule(price));
    }

    return discountedPrices;
}

export function tenPercentOff(price) {
    return price - price * 0.10;
}

export function fiveThousandOff(price) {
    if (price > 50000) {
        return price - 5000;
    }

    return price;
}
