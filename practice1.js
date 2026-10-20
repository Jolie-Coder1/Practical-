
let x = 1;

function a() {
    let x = 2;
    return x;
}

function b() {
    return x;
}

console.log(a(), b(), x);

// Expected output: 2 1 1


