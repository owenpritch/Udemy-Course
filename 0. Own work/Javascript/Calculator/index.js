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
    return operator(num1, num2)
}

// Input arrays
var number1Inputs = [];
var number2Inputs = [];
var operator;


//Event Listener Functions
function handleClick() {
    alert("Click!");
}

function handleNumber(number) {
    alert(number);
    if(operator === null) {
        number1Inputs.push(number);
        alert(number);
    } else {
        number2Inputs.push(number);
        alert(number);
    }
}

function handleOperator(input) {
    if(input === "x") {
        input = "multiply";
    }else if (input === "/") {
        input = "divide";
    } else if(input === "+") {
        input = "add";
    } else if(input === "-") {
        input = "subtract";
    }
}

function handleEquals() {
    alert("equals");
    let number1 = number1Inputs.join();
    let number2 = number2Inputs.join();
    alert(operation(operator, number1, number2));
}

// Assigning Event Listeners
for(var i = 0; i < 16; i++) {
    let button = querySelectorAll("button");
    if(button[i].classList.contains("number-key")) {
        button[i].addEventListener("click", handleNumber(button[i].innerHTML));
    } else if(button[i].classList.contains("operator")) {
        button[i].addEventListener("click", handleOperator(button[i].innerHTML));
    } else if(button[i].classList.contains("equals")) {
        button[i].addEventListener("click", handleEquals);
    }
    ///////////////button.addEventListener("click", handleNumber(i).innerHTML);
}

//document.querySelector("1").addEventListener("click", inputs.push("1"));