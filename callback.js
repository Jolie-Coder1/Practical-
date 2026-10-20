function applyDiscount(prices, rule) {
    let discountedPrices = [];

    for (let price of prices) {
        let newPrice = rule(price);
        discountedPrices.push(newPrice);
    }

    return discountedPrices;
}


let prices = [10000, 30000, 60000, 100000];


function tenPercentOff(price) {
    return price - (price * 0.10);
}

let pricesAfter10Percent = applyDiscount(prices, tenPercentOff);

console.log("Prices after 10% discount:", pricesAfter10Percent);


function fiveThousandOff(price) {
    if (price > 50000) {
        return price - 5000;
    }
    return price;
}

let pricesAfter5000Off = applyDiscount(prices, fiveThousandOff);

console.log("Prices after 5,000 discount:", pricesAfter5000Off);
