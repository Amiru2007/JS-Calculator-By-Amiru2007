
function append(value)
{
    var textValue= calculator.display.value + value;
    calculator.display.value = textValue;
}

function calculate()
{
    calculator.display.value = eval(calculator.display.value);
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}