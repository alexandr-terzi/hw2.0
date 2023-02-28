let firstNumber = +prompt("Enter first number", 2);
let secondNumber = +prompt("Enter second number", 2);
let sign = prompt("Enter one of math sign: +, -, *, /");

let task = firstNumber + sign + secondNumber;

if (sign == "+") {
    let result = firstNumber + secondNumber;
    alert(`${task} = ${result}`);
}

if (sign == "-") {
    result = firstNumber - secondNumber;
    alert(`${task} = ${result}`);
}

if (sign == "*") {
    result = firstNumber * secondNumber;
    alert(`${task} = ${result}`);
}

if (sign == "/") {
    result = firstNumber / secondNumber;
    alert(`${task} = ${result}`);
}

