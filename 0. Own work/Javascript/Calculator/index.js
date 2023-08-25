// Operator functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operation(operator, num1, num2) {
    return operator(num1, num2);
}



// Input arrays
var number1Inputs = [];
var number1;
var number2Inputs = [];
var number2;
var operator = null;
var answer = null;
var display = [];
var answer;
var answerDisplay = null;
const button = document.querySelectorAll("button");
const calcDisplay = document.getElementById("display");
calcDisplay.value = answerDisplay;


//Event Listener Functions
function handleClick() {
    alert("Click!");
}

function handleNumber() {
    //alert(this.value);
    if(operator === null) {
        number1Inputs.push(this.value);
    } else {
        number2Inputs.push(this.value);
    }
    updateDisplay(this.value);
    
}

function handleOperator() {
    //alert(this.value);
    if(this.value === "*") {
        operator = multiply;
    }else if (this.value === "/") {
        operator = divide;
    } else if(this.value === "+") {
        operator = add;
    } else if(this.value === "-") {
        operator = subtract;
    }
    updateDisplay(this.value);
}


function handleEquals() {
    number1 = number1Inputs.join("");
    number1 = Number(number1);
    number2 = number2Inputs.join("");
    number2 = Number(number2);

    answer = operation(operator, number1, number2);
    calcDisplay.value = answer;
}

function handleClear() {
    calcDisplay.value = null;
    display = [];
    number1Inputs = [];
    number2Inputs = [];
    answer = null;
    number1 = null;
    number2 = null;
    operator = null;
}

function updateDisplay(item) {
    display.push(item);
    calcDisplay.value = display.join("");

}

// Assigning Event Listeners
for(var i = 0; i < 16; i++) {
    if(button[i].classList.contains("number-key")) {
        button[i].addEventListener("click", handleNumber);
    } else if(button[i].classList.contains("operator")) {
        button[i].addEventListener("click", handleOperator);
    } else if(button[i].classList.contains("equals")) {
        button[i].addEventListener("click", handleEquals);
    } else if(button[i].classList.contains("clear")) {
        button[i].addEventListener("click", handleClear)
    }

}