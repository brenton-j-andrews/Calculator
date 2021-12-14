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

// let screen_contents = document.getElementById("screen");
// screen_contents.textContent = "Hello"

// Function to add event listeners to each button upon start.
function addEvents() {
    let buttons = document.getElementsByClassName("btn");
    for (const button of buttons) {
        button.addEventListener("click", function() {
            console.log(button.textContent);
        });
    }
}

addEvents()