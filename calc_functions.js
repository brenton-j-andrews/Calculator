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
    let operandA = "";
    let operandB = "";
    let operator = "";
    let operatorSelected = false;
    let buttons = document.getElementsByClassName("btn");
    for (const button of buttons) {
        button.addEventListener("click", function() {

            // Clear button event. Reset to starting status.
            if (button.id == "clear") {
                operandA = "";
                operandB = "";
                operator = "";
                operatorSelected = false;
                console.log(operandA);
            }

            // Delete button event. Remove last digit from current operand.
            if (button.id == "delete") {
                if (operatorSelected === false) {
                    operandA = operandA.toString().slice(0, -1);
                    console.log(operandA);
                } else {
                    operandB = operandB.toString().slice(0, -1);
                    console.log(operandB);
                }
            }
            // Number button events.
            if (button.id == "num") {

                // If no operator button pressed, operandA is the one to edit.
                if (operatorSelected === false) {
                    if (operandA == "") {
                        operandA = button.textContent;
                        console.log("A: " + operandA);
                    } else {
                        operandA += button.textContent;
                        console.log("A: " + operandA);
                    }

                } else {
                    if (operandB == "") {
                        operandB = button.textContent;
                        console.log("B: " + operandB);
                    } else {
                        operandB += button.textContent;
                        console.log("B: " + operandB);
                    }
                }
            }

            // Operator button event.
            if (button.id === "operator") {
                // Allow for operators to be chained together.
                if (operandA != "" && operandB != "") {
                    console.log("First operator: " + operator);
                    let output = operate(operator, Number(operandA), Number(operandB));
                    console.log(output);

                    if (output != undefined) {
                        operandA = output;
                    } else {
                        operandA = "";
                    }
                    operator = button.textContent;
                    operandB = "";
                    console.log(output);
                }

                // Prevent operandA from being skipped if an operator button is pressed beforehand.
                else if (operandA != "") {
                    operator = button.textContent;
                    operatorSelected = true;
                } 
                
            }

            // Equals button event.
            if (button.id === "equals" && operator != "" && operandA != "" && operandB != "") {
                let output = operate(operator, Number(operandA), Number(operandB));
                if (output != undefined) {
                    operandA = output;
                } else {
                    operandA = "";
                }
                operandB = "";
                operatorSelected = false;
                console.log("Output: " + operandA);
            }
        });
    }
}


addEvents()