const users = [
    { name: "Aline", age: 24 },
    { name: "Eric", age: 17 }
];


const adults = users.filter(u => u.age >= 18);


const names = users.map(u => u.name);


const sorted = users.sort((a, b) => a.name.localeCompare(b.name));


console.log(adults, names, sorted[0].name);
