// Calculator result
var result, last_result;
// Turn on calculator
const ON = document.querySelector('.ONCE');
const screen = document.querySelector('.screen')
ON.addEventListener('click', function(e) {
    // Clear the screen and reset variables
    screen.innerHTML = '';
    if (ON_OPERATION) {
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
        ON_OPERATION = '';
    }
    last_result = document.createElement('h1');
    result = document.createElement('h1');
    result.textContent = '0';
    screen.appendChild(result);
});
// Turn off calculator
const OFF = document.querySelector('.OFF');
OFF.addEventListener('click', function(e) {
    screen.innerHTML = '';
})
// Select all digits and put them in an array
const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let digits = [];
const n = arr.length;
for (let i = 0; i < n; i++) {
    digits[i] = document.querySelector(`.${arr[i]}`);
    digits[i].value = i;
}
// Set event for touching digits
digits.forEach(digit => digit.addEventListener('click', function() {
    // If the calculator is not ON, STOP
    if (!screen.innerHTML)
        return;
    // If the result content is 0 and you pres 0 STOP
    if (result.textContent == '0' && digit.value == 0)
        return;
    // For multiple operations
    if (ON_OPERATION != '' && result.value == 1) {
        result.value = 0;
        result.textContent = '0';
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
    }
    // Adding digits, maximum is 12 digits
    if (result.textContent.length < 12)
        if (result.textContent == '0')
            result.textContent = digit.value;
        else result.textContent += digit.value;
    // Updating result on screen
    screen.innerHTML = '';
    screen.appendChild(result);
}));
var ON_OPERATION = '';
// add two numbers
function add(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}
// substract a number from one
function substract(a, b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}
// multiply numbers
function times(a, b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}
// divide numbers
function divide(a, b) {
    a = Number(a);
    b = Number(b);
    return a / b;
}
// square root of a number
function sqrt(a) {
    a = Number(a);
    return Math.sqrt(a).toFixed(4);
}
// the rest of a / b
function modulo(a, b) {
    a = Number(a);
    b = Number(b);
    return a % b;
}
// Calculate the result
function RESULT() {
    if (!screen.innerHTML)
        return;
    if (ON_OPERATION == '')
        return;
    // Create temporary variable in case of number too big
    const aux = document.createElement('h1');
    aux.innerText = last_result.innerText;
    document.querySelector(`.${ON_OPERATION}`).style.filter = '';
    if (ON_OPERATION == 'add') 
        result.innerText = `${add(last_result.innerText, result.innerText)}`;
    else if (ON_OPERATION == 'substract') 
        result.innerText = `${substract(last_result.innerText, result.innerText)}`;
    else if (ON_OPERATION == 'times') 
        result.innerText = `${times(last_result.innerText, result.innerText)}`;
    else if (ON_OPERATION == 'divide') 
        result.innerText = `${divide(last_result.innerText, result.innerText)}`;
    else if (ON_OPERATION == 'modulo') 
        result.innerText = `${modulo(last_result.innerText, result.innerText)}`;
    else if (ON_OPERATION == 'sqrt') 
        result.innerText = `${sqrt(result.innerText)}`;
    // check if the number has decimal digits
    let i, ok = 0;
    for (i = 0; i < result.innerText.length; i++)
        if (result.innerText[i] == '.')
            ok = 1;
    // remove some decimal digits so that it fits (probably)
    if (ok)
        while (result.innerText.length > 12 && result[result.innerText.length - 1] != '.')
            result.innerText = result.innerText.substr(0, result.innerText.length - 1);
    if (result.innerText.length > 12) {
        result.innerText = last_result.innerText;
        alert('NUMBER TOO BIG');
    }
    ON_OPERATION = '';
}
// Add 2 numbers
const op_add = document.querySelector('.add');
op_add.addEventListener('click', function(e) {
    if (!screen.innerHTML)
        return;
    if (ON_OPERATION != '') {
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
        if (last_result && result.value == 0) RESULT();
    }
    last_result.innerText = result.innerText;
    ON_OPERATION = "add";
    e.target.style.filter = "brightness(75%)";
    result.value = 1;
});
// Substract operator
const op_substract = document.querySelector('.substract');
op_substract.addEventListener('click', function(e) {
    if (!screen.innerHTML)
        return;
    if (ON_OPERATION != '') {
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
        if (last_result && result.value == 0) RESULT();
    }
    last_result.innerText = result.innerText;
    ON_OPERATION = "substract";
    e.target.style.filter = "brightness(75%)";
    result.value = 1;
});
// Multiplication of 2 numbers
const op_times = document.querySelector('.times');
op_times.addEventListener('click', function(e) {
    if (!screen.innerHTML)
        return;
    if (ON_OPERATION != '') {
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
        if (last_result && result.value == 0) RESULT();
    }
    last_result.innerText = result.innerText;
    ON_OPERATION = "times";
    e.target.style.filter = "brightness(75%)";
    result.value = 1;
});
// Divide operator
const op_divide = document.querySelector('.divide');
op_divide.addEventListener('click', function(e) {
    if (!screen.innerHTML)
        return;
    if (ON_OPERATION != '') {
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
        if (last_result && result.value == 0) RESULT();
    }
    last_result.innerText = result.innerText;
    ON_OPERATION = "divide";
    e.target.style.filter = "brightness(75%)";
    result.value = 1;
});
// Modulo operator (the rest of a / b)
const op_modulo = document.querySelector('.modulo');
op_modulo.addEventListener('click', function(e) {
    if (!screen.innerHTML)
       return;
    if (ON_OPERATION != '') {
        document.querySelector(`.${ON_OPERATION}`).style.filter = '';
        if (last_result && result.value == 0) RESULT();
    }
    last_result.innerText = result.innerText;
    ON_OPERATION = "modulo";
    e.target.style.filter = "brightness(75%)";
    result.value = 1;
});
// Square root operator
const op_sqrt = document.querySelector('.sqrt');
op_sqrt.addEventListener('click', function(e) {
    if (!screen.innerHTML)
       return;
    ON_OPERATION = "sqrt";
    RESULT();
});
// Point operator for real numbers
const point = document.querySelector('.point');
point.addEventListener('click', function(e) {
    if (!screen.innerHTML)
       return;
    let i, ok = 1;
    for (i = 0; i < result.innerText.length; i++)
        if (result.innerText[i] == '.')
            ok = 0;
    if (ok) 
        result.innerText += '.';
});
// Equal operator 
const op_equal = document.querySelector('.equal');
op_equal.addEventListener('click', RESULT);