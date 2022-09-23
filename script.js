function append(value) {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").innerHTML = none;
    }
    var textValue= calculator.display.value + value;
    calculator.display.value = textValue;
}


function sqr() {
var square = document.getElementById("display").value;
    var answer = Math.sqrt(square);
    document.getElementById("display").value = answer;
}

const displayList = [];
var list = displayList;

function calculate() {
    if (document.getElementById("display").value == "NaN") {
        document.getElementById("displayHistory").innerHTML = none;
    }
    if (document.getElementById("display").value == "NaN") {
        document.getElementById("displayHistory").innerHTML = none;
    }
    displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value));
    var list = displayList;
    calculator.display.value = eval(calculator.display.value);
}

function screen() {
    if (displayList.length === 0) {
        document.getElementById("displayHistory").innerHTML = none;
    }
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("displayHistory").innerHTML = none;
    }
    document.getElementById("displayHistory").innerHTML = list;
}

function memo() {
    document.getElementById("displayHistory").innerHTML = memory;
}

function back() {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").value=""
    }
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function clearFields() {
    document.getElementById("display").value=""
}

function negate() {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").value=""
    } else {
        num1 = document.getElementById("display").value;
        num2 = -1;
        negated = num1 * num2
        document.getElementById("display").value = negated
    }
}

function hundred() {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").value=""
    } else {
        value1 = document.getElementById("display").value;
        value2 = 100;
        percent = value1 / value2;
        document.getElementById("display").value = percent;
    }
}