// Declare buttons, constants.
let operandA = "";
let operandB ="";
let operator = "";
let operatorSelected = false;
let activeOperand = 0; // 0: operandA, 1: operandB. Used for delete button implementation.

// The variables below store the information presented on the calculator screen.
let statement_contents = "";
let output_contents = "";
let statement_screen = document.getElementById("statement");
let output_screen = document.getElementById("output");

// Select elements from the DOM.
let number_buttons = document.querySelectorAll("#num");
let operator_buttons = document.querySelectorAll("#operator");
let decimal_button = document.querySelector("#decimal");
let equals_button = document.getElementById("equals");
let clear_button = document.getElementById("clear");
let delete_button = document.getElementById("delete");

// Add event listeners to each button.
equals_button.addEventListener("click", () => checkEvaluation());
clear_button.addEventListener("click", () => clearScreenAndMemory());
delete_button.addEventListener("click", () => deleteFromActiveOperand());
decimal_button.addEventListener("click", () => addToStatementContents(decimal_button));

number_buttons.forEach((button => 
    button.addEventListener("click", () => addToStatementContents(button))
    )
)

operator_buttons.forEach((button => 
    button.addEventListener("click", () => addToStatementContents(button))
    )
)

// Add one character to statement_contents. 
function addToStatementContents(button) {
    getOpValues(button)
    if (statement_contents != "") {
        appendStatementContents(button.textContent);
    } else {
        statement_contents = button.textContent;
    }
    updateStatementScreen(statement_contents);
}

// Delete Button: Remove one character from active operand.
function deleteFromActiveOperand() {
    console.log(activeOperand);
    if (activeOperand === 0) {
        operandA = operandA.slice(0, -1);
        statement_contents = operandA;
    } else if (activeOperand === 1) {
        operandB = operandB.slice(0, -1);
        statement_contents = operandA + operator + operandB;
    }

    updateStatementScreen();
}

// Append statement_contents witontentsh additional characters.
function appendStatementContents(input) {
    statement_contents += input;
}

// Transfer value of statement_contents to statement_screen element.
function updateStatementScreen() {
    statement_screen.textContent = statement_contents;

}

// Reset variables and update statement and output screens.
function clearScreenAndMemory()  {
    operandA = "";
    operandB ="";
    operator = "";
    operatorSelected = false;
    statement_contents = "";
    output_screen.textContent = "";
    decimal_button.disabled = false;
    updateStatementScreen();
}

// Add characters to operand values.
function getOpValues(button) {

    // operator value and operator chaining.
    if (button.id === "operator") {

        if (operatorSelected === false) {
            operator = button.textContent;
            operatorSelected = true;
            console.log("Operator: " + operator);
        }
        if (operatorSelected === true && operandA != "" && operandB != "") {
        checkEvaluation();
        operandA = output_screen.textContent;
        operator = button.textContent;
        operandB = "";
        statement_contents = operandA;
        updateStatementScreen();
        }

        activeOperand = 1;
        decimal_button.disabled = false;
    }

    // operandB value.
    else if (operatorSelected === true) {
        if (button.id === "decimal") {
            decimal_button.disabled =  true;
        }
        operandB += button.textContent;
        console.log("Operand B: " + operandB);
    }

    // operandA value.
    if (operatorSelected === false) {
        if (button.id === "decimal") {
            decimal_button.disabled =  true;
        }
        operandA += button.textContent;
        console.log("Operand A: " + operandA);
    }
}

// Check for valid input before calculations, swap operand values after output.
function checkEvaluation() {
    let output_value = evaluateStatement(operator, Number(operandA), Number(operandB));
    output_screen.textContent = output_value;
    activeOperand = 0;
    decimal_button.disabled =  false;
}

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

function evaluateStatement(symbol, a, b) {
    let output;
    if (symbol === " + ") {
        output = add(a, b);   
    } 
    else if (symbol === " - ") {
        output = subtract(a, b);
    }

    else if (symbol === " / ") {
        output = divide(a, b);
    }

    else if (symbol === " * ") {
        output = multiply(a, b);
    }
    return output;
}