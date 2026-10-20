const numbers = [3, 8, 12, 5, 20, 7];

const overSix = numbers.filter(number => number > 6);
console.log("Numbers over 6:", overSix);



const doubled = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubled);



const total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Total:", total);




const largest = Math.max(...numbers);

console.log("Largest number:", largest);
