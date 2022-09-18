
function append(value)
{
    var textValue= calculator.display.value + value;
    calculator.display.value = textValue;
}

function calculate()
{
    calculator.display.value = eval(calculator.display.value);
}

const memory = [];
var list = memory;

function history() {
    memory.push(eval(calculator.display.value));
  var list = memory;
}

function memo() {
    document.getElementById("displayHistory").innerHTML = memory;
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function clearFields() {
    document.getElementById("display").value=""
}

function negate() {
    num1 = document.getElementById("display").value;
    num2 = -1;
    negated = num1 * num2
    document.getElementById("display").value = negated
}