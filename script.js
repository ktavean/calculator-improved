const paragraph = document.querySelector("p");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal")
let operator = "";
let num1 = "";
let num2 = "";

const add = (a, b) => {
    num1 = a + b;
    return paragraph.innerText = a + b;
}

const subtract = (a, b) => {
    return paragraph.innerText = a - b;
}

const multiply = (a, b) => {
    return paragraph.innerText = a * b;
}

const divide = (a, b) => {
    return paragraph.innerText = a / b;
}

const operate = (operator, a, b) => {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const displayNumbers = (e) => {
    if(paragraph.innerText === "" && e.target.value === "0")
        return false;
    else {
        paragraph.innerText += e.target.value;
    }
    
}

const clearDisplay = () => {
    num1 = "";
    num2 = "";
    operator = "";
    paragraph.innerText = "";
}

const delNumber = () => {
    paragraph.innerText = paragraph.innerText.slice(0, paragraph.innerText.length-1);
}

const storeNumber = (e) => {
    if (!num1) {
        num1 = Number(paragraph.innerText);
        operator = e.target.value;
        paragraph.innerText = "";
    } else {
        paragraph.innerText = "";
        
        console.log(operator, num1, num2);
    }
}

equals.addEventListener("click", () => {
    num2 = Number(paragraph.innerText)
    operate(operator, num1, num2)
})

// const stringToNum = () => {
//     numbers = paragraph.innerText.split(operator);
//     operate(operator, numbers)
// }

// const storeOperator = (e) => {
//     if (!operator) {
//         operator = e.target.value;
//         paragraph.innerText += operator;
//     } else {
//         stringToNum();
//         operator = e.target.value;
//         paragraph.innerText += operator;
//     }
// }
