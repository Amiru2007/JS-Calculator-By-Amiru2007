
function append(value)
{
    var textValue= calculator.display.value + value;
    calculator.display.value = textValue;
}

function calculate()
{
    calculator.display.value = eval(calculator.display.value);
}