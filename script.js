const paragraph = document.querySelector("p")
let operator;

const add = (a, b) => {
    operator = "";
    return paragraph.innerText = Number(a) + Number(b);
}

const subtract = (a, b) => {
    operator = "";
    return paragraph.innerText = Number(a) - Number(b);
}

const multiply = (a, b) => {
    operator = "";
    return paragraph.innerText = Number(a) * Number(b);
}

const divide = (a, b) => {
    operator = "";
    return paragraph.innerText = Number(a) / Number(b);
}

const operate = (operator, [a, b]) => {
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
    paragraph.innerText += e.target.value;
}

const clearDisplay = () => {
    paragraph.innerText = "";
}

// const storeNumber = (e) => {
//     let num1 = paragraph.innerText;
//     let operator = e.target.value;
//     paragraph.innerText = "";

//     console.log(num1, operator);
// }

const stringToNum = () => {
    numbers = paragraph.innerText.split(operator);
    operate(operator, numbers)
}


const storeOperator = (e) => {
    if (!operator) {
        operator = e.target.value;
        paragraph.innerText += operator;
    } else {
        stringToNum();
        operator = e.target.value;
        paragraph.innerText += operator;
    }
}
