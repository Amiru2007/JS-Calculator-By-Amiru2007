function append(value) {
    if (document.getElementById("display").value == "undefined") {
        document.getElementById("display").innerHTML = none;
    } else {
        var textValue= calculator.display.value + value;
        calculator.display.value = textValue;
    }
}

function appendOperator(value) {
    if (document.getElementById("display").value.length === 0) {
        document.getElementById("display").innerHTML = none;
    } else {
        var textValue= calculator.display.value + value;
        calculator.display.value = textValue;
    }
}

function sqr() {
    var square = document.getElementById("display").value;
    var answer = Math.sqrt(square);
    document.getElementById("display").value = answer;
    displayList.push(square + "**(½)"  + " = " + answer);
    const finalArray = displayList.join(" ");
    document.getElementById("displayHistory").innerHTML = finalArray;
}

function cbr() {
    var cube = document.getElementById("display").value;
    var answer = Math.cbrt(cube);
    document.getElementById("display").value = answer;
    displayList.push(cube + "**(⅓)"  + " = " + answer);
    const finalArray = displayList.join(" ");
    document.getElementById("displayHistory").innerHTML = finalArray;
}

const displayList = [];
var list = displayList;

function calculate() {
    if (document.getElementById("display").value == "NaN") {
        document.getElementById("displayHistory").innerHTML = none;
    } else if (document.getElementById("display").value == "NaN") {
        document.getElementById("displayHistory").innerHTML = none;
    } else if (document.getElementById("display").value == "") {
        displayList.push("");
    } else if (document.getElementById("display").value == "undefined") {
        displayList.push("");
    } else {
        if (displayList.length === 0) {
            displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value));
        } else if (displayList.length > 0) {
            displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value));
        } else if (displayList.length === 6) {
            let removes = 1;
            displayList.splice(removes,1);
            displayList.push(document.getElementById("display").value + " = " + eval(calculator.display.value));
        }
    }
    var list = displayList;
    calculator.display.value = eval(calculator.display.value);
    var lastItem = displayList[displayList.length - 1];
    rowNum = displayList.indexOf[lastItem];
    if (rowNum = 0) {
        rowNum = rowNum + 0;
        document.getElementById("displayHistory").innerHTML = rowNum + "  " + lastItem;
    } else {
        rowNum = displayList.length;
        document.getElementById("displayHistory").innerHTML = rowNum + "  " + lastItem;
    }
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
    displayList.push("lg" + logarithm1 + " = " + logarithm2);
    const finalArray = displayList.join(" ");
    document.getElementById("displayHistory").innerHTML = finalArray;
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

function addEmoji() {
  var input = document.getElementById("myInput");
  var emojiCode = 0x1F604; // Unicode code point for smiling face with smiling eyes emoji
  var emoji = String.fromCharCode(emojiCode);
  input.value += emoji;
}

// Get a reference to the disabled input element
var display = document.getElementById('display');

// Add event listener for paste event on the document
document.addEventListener('paste', function(event) {
    // Get the pasted text
    var pastedText = (event.clipboardData || window.clipboardData).getData('text');

    // Check if the pasted text represents a number
    if (!isNaN(pastedText)) {
        // Append the pasted text to the existing value of the disabled input
        display.value += pastedText;
    }

    // Prevent the default paste behavior
    event.preventDefault();
});

var currentItemIndex = displayList.length - 1;
var itemDisplay = document.getElementById('displayHistory');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

function displayItem(index) {
    itemDisplay.textContent = displayList[index];
}

function showPreviousItem() {
    if (displayList.length <= 1) {
        return;
    }
    currentItemIndex = (currentItemIndex - 1 + displayList.length) % displayList.length;
    displayItem(currentItemIndex);
}

function showNextItem() {
    if (displayList.length <= 1) {
        return;
    }
    currentItemIndex = (currentItemIndex + 1) % displayList.length;
    displayItem(currentItemIndex);
}

displayItem(currentItemIndex);