function calculator (a, b, operation) {
    return operation(a, b);
}

console.log(calculator(2, 3, (x, y) => x + y)); // 5
console.log(calculator(2, 3, (x, y) => x - y))