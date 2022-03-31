class Calculator{

    constructor(firstNumber, secondNumber, operator,value) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = value;
    }

    // determine the current operation's label
   getAction(){
    
        if (document.getElementById('add').checked) {
            this.operator = document.getElementById('add').value;
        } else if (document.getElementById('subtract').checked) {
            this.operator = document.getElementById('subtract').value;
        } else if (document.getElementById('multiply').checked) {
            this.operator = document.getElementById('multiply').value;
        } else {
            this.operator = "divid";
        }
        return this.operator;
    }
    // perform a calculation based on the currently selected operation
    operate(firstNumber, secondNumber,operator){
        if(this.operator == 'add'){
            this.value = this.add(firstNumber, secondNumber);
        } else if (this.operator == 'subtract') {
            this.value = this.subtract(firstNumber, secondNumber);

        } else if (this.operator == 'multiply') {
            this.value = this.multiply(firstNumber, secondNumber);
        } else{
            if(secondNumber === 0){
                alert("Please enter a non zero second number as division with zero is undefines");
            }else{
                this.value = this.divide(firstNumber, secondNumber);
            }     
        }

        return Math.round(this.value * 100)/100;
    }

  //  attemptedDivideByZero = false;

    // perform addition operation
    add(a, b){
        return a + b;
    }

    // perform subtraction operation
    subtract(a, b){
        return a - b;
    }

    // perform multiplication operation
    multiply(a, b){
        return a * b;
    }

    // perform divide operation
    divide(a, b){
        return a / b;
    }
}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;