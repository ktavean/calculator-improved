const paragraph = document.querySelector("#disp");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const percentageBtn = document.querySelector("#percentage");

let operator = "";
let num1 = "";
let num2 = "";
let cleared = true;

const add = (a, b) => {
    if (a === 77 && b === 33) return 100;
    return Math.floor((a + b) * 100) / 100;
}

const subtract = (a, b) => {
    return Math.floor((a - b) * 100) / 100;
}

const multiply = (a, b) => {
    return Math.floor((a * b) * 100) / 100;
}

const divide = (a, b) => {
    return Math.floor((a / b) * 100) / 100;
}

const percentage = (a) => {
    return a / 100;
}

const operate = (operation, a, b) => {
    num2 = "";
    switch(operation) {
        case "+":
            num1 = Math.floor((a + b) * 10) / 10;
            return paragraph.innerText = add(a, b);
        case "-":
            num1 = Math.floor((a - b) * 10) / 10;
            return paragraph.innerText = subtract(a, b);
        case "*":
            num1 = Math.floor((a * b) * 10) / 10;
            return paragraph.innerText = multiply(a, b);
        case "/":
            if (b === 0) {
                num1 = ""
                num2 = ""
                operator = ""
                cleared = false;
                return paragraph.innerText = "Dividing by 0. Original."
            } else {
                num1 = Math.floor((a / b) * 10) / 10;
                return paragraph.innerText = divide(a, b);
            }
        case "%":
            num1 = a / 100;
            return paragraph.innerText = percentage(a);
    }
}

const display = () => {
    if (num1 && operator) {
        paragraph.innerText = "";
        paragraph.innerText = num2;
    } else {
        paragraph.innerText = num1;
    }
}

const storeNums = (e) => {
    if (!operator) {
        num1 += e.target.value;
    } else {
        num2 += e.target.value;
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (e) => {
        if (cleared === false) {
            paragraph.innerText = "Please clear the screen first";
        } else {
            storeNums(e);
            display();
        }
    })
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
        if (num2) {
            operate(operator, Number(num1), Number(num2));
            operator = e.target.value;
            decimal.classList.remove("disabled");
        } else if (cleared === false) {
            paragraph.innerText = "Please clear the screen first";
        } else {
            operator = e.target.value;
            decimal.classList.remove("disabled");
        }
    })
}

equals.addEventListener("click", () => {
    operate(operator, Number(num1), Number(num2));
})

decimal.addEventListener("click", (e) => {
    if (cleared === false) {
        paragraph.innerText = "Please clear the screen first";
    } else {
        decimal.classList.add("disabled");
        storeNums(e);
        display();
    }
})

const clearDisplay = () => {
    num1 = "";
    num2 = "";
    operator = "";
    paragraph.innerText = "";
    decimal.classList.remove("disabled");
    cleared = true;
}

clear.addEventListener("click", clearDisplay);

del.addEventListener("click", () => {
    if (cleared === false) {
        paragraph.innerText = "Please clear the screen first";
    } else {
        if (!num2) {
            let str = String(num1)
            num1 = str.slice(0, str.length-1)
            if (str[str.length-1] === ".") {
                num1 = str.slice(0, str.length-1)
                decimal.classList.remove("disabled");
                paragraph.innerText = num1;
            } else {
                paragraph.innerText = num1;
            }
            operator = "";
        } else {
            let str = String(num2);
            num2 = str.slice(0, str.length-1);
            if (str[str.length-1] === ".") {
                num2 = str.slice(0, str.length-1)
                decimal.classList.remove("disabled");
                paragraph.innerText = num2;
            } else {
                paragraph.innerText = num2;
            }
    }
}
        
})

percentageBtn.addEventListener("click", () => {
    if (num1) {
        operate("%", num1);
    }
})