// Calculator functions: add, subtract, divide, multiply and more!

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(symbol, a, b) {
    let output;
    if (symbol === "+") {
        output = add(a, b);   
    } 
    else if (symbol === "-") {
        output = subtract(a, b);
    }

    else if (symbol === "/") {
        output = divide(a, b);
    }

    else if (symbol === "*") {
        output = multiply(a, b);
    }

    return output;
}

console.log(operate("/", 4, 6));