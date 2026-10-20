function makeGreeting(greeting) {
    return function(name) {
        return '${greeting}, ${name}!';
    };
}

const hello = makeGreeting("Muraho");

setTimeout(() => {
    console.log(hello("Aline"));
}, 1000);
