// setup variables and get a calculator instance
//var calc = new Calculator(firstNumber, secondNumber, operator);

var operator = "";
var value = 0;
var calc = "";



function CreateCalculator() {
    var firstValue = document.getElementById('firstnumber').value;
    var secondValue = document.getElementById('secondnumber').value;
    if (isNaN(firstValue) || isNaN(secondValue)){
        alert("Please provide the input as a number");
        return false;
     }else
     {
        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
     }
    var operator = getOperator();
    calc = new Calculator(firstNumber,secondNumber,operator,value);
    var finalResult = calculate(firstNumber,secondNumber,operator);
    var label = calc.getAction();
    var finalMessage = `The result of ${label}ing ${firstNumber} and ${secondNumber} is ${finalResult}`;
    updateResultText(finalMessage);
}

// perform a calculation when the operator button is clicked
function calculate(firstNumber , secondNumber,operator) {
     value = calc.operate(firstNumber,secondNumber,operator);
     return value;  
}

/**
 * set the text in the result section of the UI
 * @param {*} value 
 */
function updateResultText(value) {
    document.getElementById('final-result').innerHTML = value;

}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById('mainContent').reset();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {

    var radioValues = document.getElementsByName('calculator');
              
            for(i = 0; i < radioValues.length; i++) {
                if(radioValues[i].checked){
                   operator =  radioValues[i].value;
                }
            }
            return operator;
}
