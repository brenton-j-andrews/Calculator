// Declare buttons, constants.
let operandA = "";
let operandB ="";
let operator = "";
let operatorSelected = false;

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
delete_button.addEventListener("click", () => deleteStatementContents());
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

// Remove one character from statement_contents.
function deleteStatementContents() {
    statement_contents = statement_contents.slice(0, -1);
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
        operandA = output_screen.textContent;
        operator = button.textContent;
        statement_contents = operandA;
        console.log(statement_contents);
        operandB = "";
        updateStatementScreen();
        }
    }

    // operandB value.
    if (operatorSelected === true && button.id === "num") {
        operandB += button.textContent;
        console.log("Operand B: " + operandB);
    }



    // operandA value.
    if (operatorSelected === false && button.id === "num") {
        operandA += button.textContent;
        console.log("Operand A: " + operandA);
    }
}

// Check argument operand for more than one decimal. Disable decimal button if so.
function decimalCheck(button, operand) {
    if (operand.includes(".")) {
        return true;
    }
}

// Check for valid input before calculations, swap operand values after output.
function checkEvaluation() {
    output_screen.textContent = evaluateStatement(operator, Number(operandA), Number(operandB));
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