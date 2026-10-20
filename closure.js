function createBankAccount(initial) {
    let accountBalance = initial;

    function deposit(amount) {
        if (amount > 0) {
            accountBalance += amount;
            console.log("Deposit successful.");
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    function withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
        } else if (amount > accountBalance) {
            console.log("Insufficient balance.");
        } else {
            accountBalance -= amount;
            console.log("Withdrawal successful.");
        }
    }

    function balance() {
        return accountBalance;
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        balance: balance
    };
}


let account = createBankAccount(1000);


account.deposit(500);
console.log("Balance:", account.balance());

account.withdraw(200);
console.log("Balance:", account.balance());

account.withdraw(2000);
console.log("Balance:", account.balance());
