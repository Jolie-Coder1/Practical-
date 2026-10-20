const products = [
    { name: "Sport Shoes", price: 15000, stock: 10 },
    { name: "Sneakers", price: 25000, stock: 20 },
    { name: "School Shoes", price: 18000, stock: 35 },
    { name: "Running Shoes", price: 30000, stock: 15 },
    { name: "Sandals", price: 10000, stock: 25 }
];


const affordableShoes = products.filter(product => product.price < 20000);

console.log("Shoes under 20,000 RWF:");
for (const product of affordableShoes) {
    console.log(product.name);
}


let highestStock = products[0];

for (const product of products) {
    if (product.stock > highestStock.stock) {
        highestStock = product;
    }
}

console.log("Product with highest stock:", highestStock.name);
console.log("Stock:", highestStock.stock);


const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
const averagePrice = totalPrice / products.length;

console.log("Average price:", averagePrice, "RWF");
