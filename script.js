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

function cbr() {
    var cube1 = document.getElementById("display").value;
    var cube2 = Math.cbrt(cube1);
    document.getElementById("display").value = cube2;
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
    if (document.getElementById("display").value == "") {
        displayList.push("");
    } else if (document.getElementById("display").value == "undefined") {
        displayList.push("");
    } else {
        if (displayList.length === 0) {
            displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value) + "<br>");
        } else if (displayList.length > 0) {
            displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value) + "<br>");
        } else if (displayList.length === 6) {
            let removes = 1;
            displayList.splice(removes,1);
            displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value) + "<br>");
        }
    }
    var list = displayList;
    calculator.display.value = eval(calculator.display.value);
    const finalArray = displayList.join(" ");
    document.getElementById("displayHistory").innerHTML = finalArray;
}

function array() {
    var mylist = document.getElementById("myList");
    var x = document.getElementById("mySelect").value;
    document.getElementById("mySelect").value="";
    document.getElementById("myselect").value = "mylist";
}

function screen() {
    if (displayList.length === 0) {
        document.getElementById("displayHistory").innerHTML = none;
    }
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("displayHistory").innerHTML = none;
    }
    document.getElementById("displayHistory").innerHTML = displayList;
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

function clearHisAlert() {
    if (confirm("Are you sure you want to clear history?")) {
      clearHis();
    }
}

function clearHis() {
    displayList.length = 0;
    var list = displayList;
    document.getElementById("displayHistory").innerHTML = list;
}

function log() {
    var logarithm1 = document.getElementById("display").value;
    var logarithm2 = Math.log10(logarithm1);
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

function fi() {
    var fi = 22 / 7;
    document.getElementById("display").value = fi;
}

function negate() {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").value=""
    } else if (document.getElementById("display").value == "") {
        document.getElementById("display").value=""
    } else {
        num1 = document.getElementById("display").value;
        num2 = -1;
        negated = num1 * num2
        document.getElementById("display").value = num1 + "*" + num2;
    }
}

function hundred() {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").value=""
    } else if (document.getElementById("display").value == "") {
        document.getElementById("display").value=""
    } else {
        value1 = document.getElementById("display").value;
        document.getElementById("display").value = value1 + "/" + 100;
    }
}

function oneDivide() {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").value=""
    } else if (document.getElementById("display").value == 0) {
        document.getElementById("display").value = "Can't divide by zero";
    } else {
        onedivi = document.getElementById("display").value;
        document.getElementById("display").value = ""
        document.getElementById("display").value = 1 + "/" + onedivi;
    }
}

function down() {
    var count = document.getElementById("displayHistory").value;
    if (displayList.length === 0) {
        document.getElementById("displayHistory").innerHTML = none;
    }
    var index = displayList.indexOf(count);
    var next = index + 1;
    var show = displayList[next];
    document.getElementById("displayHistory").innerHTML = show;
}

const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleBtn.innerHTML = 'Switch to Light Mode';
  } else {
    toggleBtn.innerHTML = 'Switch to Dark Mode';
  }
});