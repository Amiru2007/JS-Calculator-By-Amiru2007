var inputIds = [
  "prevOnFull",
  "closePopup",
  "textCopy",
  "clearFull",
  "nextOnFull",
  "superscript",
  "square",
  "cube",
  "backspace",
  "plusMinus",
  "prevButton",
  "nextButton",
];
var iconClasses = [
  "\uf053",
  "\uf55a",
  "\uf0c5",
  "\uf030",
  "\uf054",
  "\uf12b",
  "\uf698",
  "³\uf698",
  "\uf55a",
  "\ue43c",
  "\uf053",
  "\uf054",
];

for (var i = 0; i < inputIds.length; i++) {
  var input = document.getElementById(inputIds[i]);
  input.value = iconClasses[i]; // Replace with the Unicode value of the desired Font Awesome icon
  input.classList.add("fa");
}

function append(value) {
  if (document.getElementById("display").value == "undefined") {
    document.getElementById("display").innerHTML = none;
  } else {
    var textValue = calculator.display.value + value;
    calculator.display.value = textValue;
  }
}

function appendOperator(value) {
  if (document.getElementById("display").value.length === 0) {
    document.getElementById("display").innerHTML = none;
  } else {
    var textValue = calculator.display.value + value;
    calculator.display.value = textValue;
  }
}

const displayList = [];
var list = displayList;

function calculate() {
  var value = document.getElementById("display").value;
  var lastCharacter = value.charAt(value.length - 1);
  const operatorSymbols = ["+", "-", "*", "/", ".", "**"];
  if (document.getElementById("display").value == "NaN") {
    return;
  } else if (document.getElementById("display").value == "NaN") {
    return;
  } else if (document.getElementById("display").value == "") {
    return;
  } else if (document.getElementById("display").value == "undefined") {
    return;
  } else if (operatorSymbols.includes(lastCharacter)) {
    var valueLength = value.length;
    const newValue = value.slice(0, valueLength - 1);
    document.getElementById("display").value = newValue;
    displayList.push(newValue + " = " + eval(calculator.display.value));
  } else {
    if (displayList.length === 0) {
      displayList.push(
        document.getElementById("display").value +
          " = " +
          eval(calculator.display.value)
      );
    } else if (displayList.length > 0) {
      displayList.push(
        document.getElementById("display").value +
          " = " +
          eval(calculator.display.value)
      );
    } else if (displayList.length === 6) {
      let removes = 1;
      displayList.splice(removes, 1);
      displayList.push(
        document.getElementById("display").value +
          " = " +
          eval(calculator.display.value)
      );
    }
  }
  var list = displayList;
  calculator.display.value = eval(calculator.display.value);
  var lastItem = displayList[displayList.length - 1];
  rowNum = displayList.indexOf[lastItem];
  if ((rowNum = 0)) {
    rowNum = rowNum + 0;
    document.getElementById("displayHistory").innerHTML = lastItem;
  } else {
    rowNum = displayList.length;
    document.getElementById("displayHistory").innerHTML = lastItem;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calculate();
  }
});

function array() {
  var mylist = document.getElementById("myList");
  var x = document.getElementById("mySelect").value;
  document.getElementById("mySelect").value = "";
  document.getElementById("myselect").value = "mylist";
}

function sqr() {
  var square = document.getElementById("display").value;
  var answer = Math.sqrt(square);
  document.getElementById("display").value = answer;
  displayList.push(square + "**(½)" + " = " + answer);
  var lastItem = displayList[displayList.length - 1];
  rowNum = displayList.indexOf[lastItem];
  if ((rowNum = 0)) {
    rowNum = rowNum + 0;
    document.getElementById("displayHistory").innerHTML = lastItem;
  } else {
    rowNum = displayList.length;
    document.getElementById("displayHistory").innerHTML = lastItem;
  }
}

function cbr() {
  var cube = document.getElementById("display").value;
  var answer = Math.cbrt(cube);
  document.getElementById("display").value = answer;
  displayList.push(cube + "**(⅓)" + " = " + answer);
  var lastItem = displayList[displayList.length - 1];
  rowNum = displayList.indexOf[lastItem];
  if ((rowNum = 0)) {
    rowNum = rowNum + 0;
    document.getElementById("displayHistory").innerHTML = lastItem;
  } else {
    rowNum = displayList.length;
    document.getElementById("displayHistory").innerHTML = lastItem;
  }
}

function screen() {
  if (displayList.length === 0) {
    document.getElementById("displayHistory").innerHTML = none;
  }
  if (document.getElementById("display").value == "undefined") {
    document.getElementById("displayHistory").innerHTML = none;
  }
  var lastItem = displayList[displayList.length - 1];
  document.getElementById("displayHistory").innerHTML = lastItem;
}

function memo() {
  document.getElementById("displayHistory").innerHTML = memory;
}

function back() {
  if (document.getElementById("display").value == "undefined") {
    document.getElementById("display").value = "";
  }
  var value = document.getElementById("display").value;
  document.getElementById("display").value = value.substr(0, value.length - 1);
}

function clearFields() {
  document.getElementById("display").value = "";
}

function clearHisAlert() {
  if (confirm("Are you sure you want to clear history?")) {
    clearHis();
    let bodyblur = document.getElementById('bodyblur');
    bodyblur.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function clearHis() {
  displayList.length = 0;
  var list = displayList;
  document.getElementById("displayHistory").innerHTML = list;
}

function log() {
  var logarithm = document.getElementById("display").value;
  var answer = Math.log10(logarithm);
  document.getElementById("display").value = answer;
  displayList.push("lg" + logarithm + " = " + answer);
  var lastItem = displayList[displayList.length - 1];
  document.getElementById("displayHistory").innerHTML = lastItem;
}

function tan() {
  let tan = document.getElementById("display").value;
  let answer = (tan * Math.PI) / 180;
  let finalAnswer = Math.tan(answer);
  document.getElementById("display").value = finalAnswer;
  displayList.push("tan(" + tan + ") = " + finalAnswer);
  var lastItem = displayList[displayList.length - 1];
  rowNum = displayList.indexOf[lastItem];
  if ((rowNum = 0)) {
    rowNum = rowNum + 0;
    document.getElementById("displayHistory").innerHTML = lastItem;
  } else {
    rowNum = displayList.length;
    document.getElementById("displayHistory").innerHTML = lastItem;
  }
}

function exp() {
  var exp = document.getElementById("display").value;
  var answer = Math.exp(exp);
  document.getElementById("display").value = answer;
  displayList.push("exp(" + exp + ") = " + answer);
  var lastItem = displayList[displayList.length - 1];
  rowNum = displayList.indexOf[lastItem];
  if ((rowNum = 0)) {
    rowNum = rowNum + 0;
    document.getElementById("displayHistory").innerHTML = lastItem;
  } else {
    rowNum = displayList.length;
    document.getElementById("displayHistory").innerHTML = lastItem;
  }
}

function fi() {
  var fi = 22 / 7;
  document.getElementById("display").value = fi;
}

function negate() {
  if (document.getElementById("display").value == "undefined") {
    document.getElementById("display").value = "";
  } else if (document.getElementById("display").value == "") {
    document.getElementById("display").value = "";
  } else {
    num1 = document.getElementById("display").value;
    num2 = -1;
    negated = num1 * num2;
    var value = "(" + num1 + ")";
    document.getElementById("display").value = "(" + value + "*" + num2 + ")";
  }
}

function hundred() {
  if (document.getElementById("display").value == "undefined") {
    document.getElementById("display").value = "";
  } else if (document.getElementById("display").value == "") {
    document.getElementById("display").value = "";
  } else {
    value1 = document.getElementById("display").value;
    document.getElementById("display").value = value1 + "/" + 100;
  }
}

function oneDivide() {
  if (document.getElementById("display").value == "undefined") {
    document.getElementById("display").value = "";
  } else if (document.getElementById("display").value == 0) {
    document.getElementById("display").value = "Can't divide by zero";
  } else {
    onedivi = document.getElementById("display").value;
    document.getElementById("display").value = "";
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

const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.innerHTML =
      "<span class='material-symbols-outlined'>light_mode</span>";
  } else {
    toggleBtn.innerHTML =
      "<span class='material-symbols-outlined'>dark_mode</span>";
  }
});

function addEmoji() {
  var input = document.getElementById("myInput");
  var emojiCode = 0x1f604; // Unicode code point for smiling face with smiling eyes emoji
  var emoji = String.fromCharCode(emojiCode);
  input.value += emoji;
}

// Get a reference to the disabled input element
var display = document.getElementById("display");

// Add event listener for paste event on the document
document.addEventListener("paste", function (event) {
  // Get the pasted text
  var pastedText = (event.clipboardData || window.clipboardData).getData(
    "text"
  );

  // Check if the pasted text represents a number
  if (!isNaN(pastedText)) {
    // Append the pasted text to the existing value of the disabled input
    display.value += pastedText;
  }

  // Prevent the default paste behavior
  event.preventDefault();
});

var currentItemIndex = displayList.length - 1;
var itemDisplay = document.getElementById("displayHistory");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

function displayItem(index) {
  itemDisplay.textContent = displayList[index];
}

function showPreviousItem() {

  if (displayList.length <= 1) {
    alert("There's nothing");
    return;
  }
  
  currentItemIndex = (currentItemIndex - 1 + displayList.length) % displayList.length;
  displayItem(currentItemIndex);
}

document.getElementById("prevOnFull").onclick = function() {
  // Delay the execution of the "delayedFunction" by 2 seconds (2000 milliseconds)
  setTimeout(showPreviousItem, 500);
};

function showNextItem() {

  if (displayList.length <= 1) {
    alert("There's nothing");
    return;
  }
  
  currentItemIndex = (currentItemIndex + 1) % displayList.length;
  displayItem(currentItemIndex);
}

document.getElementById("nextOnFull").onclick = function() {
  // Delay the execution of the "delayedFunction" by 2 seconds (2000 milliseconds)
  setTimeout(showNextItem, 500);
};

displayItem(currentItemIndex);

const animateButton1 = document.getElementById('prevOnFull');
const animateButton2 = document.getElementById('nextOnFull');
const animatedElement = document.getElementById('equationDetail');

function animateElement() {

  if (displayList.length <= 1) {
    return;
  }

  // Add the class to start the animation
  animatedElement.classList.add('fadeAnimation');

  // Remove the class after the animation completes to reset it for future clicks
  animatedElement.addEventListener('animationend', onAnimationEnd);
}

function onAnimationEnd() {
  animatedElement.classList.remove('fadeAnimation');
  animatedElement.removeEventListener('animationend', onAnimationEnd);
}

animateButton1.addEventListener('click', animateElement);
animateButton2.addEventListener('click', animateElement);

function updateFavicon() {
  var isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  var favicon = document.getElementById("site-favicon");
  var faviconLink = document.createElement("link");

  // Remove existing favicon
  var existingFavicon = document.getElementById("site-favicon");
  if (existingFavicon) {
    existingFavicon.remove();
  }

  // Create new favicon link element
  faviconLink.id = "site-favicon";
  faviconLink.rel = "icon";
  faviconLink.type = "image/svg";
  faviconLink.href = isDark ? "SVGs/white logo.svg" : "SVGs/black logo.svg";

  // Append the new favicon link to the head element
  document.head.appendChild(faviconLink);
}

// Call the updateFavicon function when the page loads
window.onload = updateFavicon;

const chevronButton = document.getElementById("prevButton");

chevronButton.addEventListener("click", function () {
  chevronButton.classList.toggle("active");
});

var intervalId; // Variable to store the interval ID
var getIndex;

function updateTarget() {
  var sourceText = document.getElementById("displayHistory").innerText; // Get the text from the source paragraph
  if (sourceText.length === 0) {
    document.getElementById("popupEquation").innerText = "ಠ_ಠ";
    return;
  }
  document.getElementById("popupEquation").innerText = sourceText; // Update the text of the target paragraph
  getIndex = sourceText;
}

function getRowNumber() {
  if (getIndex === "") {
    document.getElementById("popupEquation").innerText = getIndex; // add one to show the real world index of the getIndex
    return;
  } else {
    document.getElementById("getArrayIndex").innerHTML =
      displayList.indexOf(getIndex) + 1; // add one to show the real world index of the getIndex
  }
}

function stopContinuousFunction() {
  clearInterval(intervalId); // Clear the interval
  
  var div = document.getElementById("bodyblur");
  var sourceText = document.getElementById("displayHistory").innerText;
  div.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closingPopup() {
  let bodyblur = document.getElementById('bodyblur');
  bodyblur.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    var myDiv = document.getElementById("bodyblur");
    myDiv.style.display = "none";
  }
});

setInterval(updateTarget, 0);
setInterval(getRowNumber, 0);

var stopButton = document.getElementById("displayHistory");
stopButton.addEventListener("click", stopContinuousFunction);
startButton.addEventListener("click", startContinuousFunction);

function textCopy() {
  // Get the text from the <p> tag
  var text = document.getElementById("popupEquation").innerText;

  if (text === "ಠ_ಠ") {
    alert("Nothing to copy here");
    return;
  }

  // Create a temporary textarea element to hold the text
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;

  // Append the textarea to the document body
  document.body.appendChild(tempTextArea);

  // Select the text within the textarea
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // Alert the user
  alert("Text copied to clipboard: " + text);
}
