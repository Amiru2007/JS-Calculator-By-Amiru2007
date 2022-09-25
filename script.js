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
    displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value) + "<br>");
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

function log() {
    var logarithm1 = document.getElementById("display").value;
    var logarithm2 = Math.log(logarithm1);
    document.getElementById("display").value = logarithm2;
}

function sin() {
    var sin1 = document.getElementById("display").value;
    var sin2 = Math.sin(sin1).toFixed(2);
    document.getElementById("display").value = sin2;
}

function cos() {
    var cos1 = document.getElementById("display").value;
    var cos2 = 180 / cos1;
    var cos3 = Math.cos(Math.PI/cos2).toFixed(2);
    document.getElementById("display").value = cos3;
}

function tan() {
    let tan1 = document.getElementById("display").value;
    let tan2 = tan1 * Math.PI/180; 
    document.getElementById("display").value = Math.tan(tan2);
}

function exp() {
    var exp1 = document.getElementById("display").value;
    var exp2 = Math.exp(exp1);
    document.getElementById("display").value = exp2;
}
  
  console.log(getTanFromDegrees(0));
  
  console.log(getTanFromDegrees(45));
  
  console.log(getTanFromDegrees(90));
  

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