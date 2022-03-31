class Calculator{

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
   getAction(operator){
       if(operator === "add"){
           return "adding";
       }else if(operator === "subtract"){
           return "subtracting"
       }else if(operator === "multiply"){
        return "multiplying";
       }else{
           return "dividing";
       }
             
    }
    // perform a calculation based on the currently selected operation
    operate(firstNumber, secondNumber,operator){
        debugger;
        if(operator == "add"){
            add(firstNumber,secondNumber);
        } else if (operator == "subtract") {
            subtract(firstNumber, secondNumber);

        } else if (operator == "multiply") {
            multiply(firstNumber,secondNumber);
        } else if(operator == "divide"){
             divide(firstNumber,secondNumber);
        }
    }


   attemptedDivideByZero = false;
    // perform addition operation
    add(firstNumber,secondNumber){
        value = this.firstNumber + this.secondNumber;
    }

    // perform subtraction operation
    subtract(firstNumber,secondNumber){
        value = this.firstNumber - this.secondNumber;
    }

    // perform multiplication operation
    multiply(firstNumber,secondNumber){
        value = this.firstNumber * this.secondNumber;
    }

    // perform divide operation
    divide(firstNumber,secondNumber){     
        if(secondNumber === 0){
            alert("Please enter a non zero second number as division with zero is undefined");
        }else{
            attemptedDivideByZero = true;
            value = this.firstNumber/this.secondNumber;
        }        
    }
}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;