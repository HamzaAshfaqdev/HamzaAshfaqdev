const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    if ('+-*/%^'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateSquare() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch {
        display.value = 'Error';
    }
}

function calculateExponent() {
    try {
        display.value = Math.exp(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateLn() {
    try {
        display.value = Math.log(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}

function calculateFactorial() {
    try {
        let num = eval(display.value);
        if (num < 0) {
            display.value = 'Error';
            return;
        }
        let factorial = 1;
        for (let i = num; i > 1; i--) {
            factorial *= i;
        }
        display.value = factorial;
    } catch {
        display.value = 'Error';
    }
}
