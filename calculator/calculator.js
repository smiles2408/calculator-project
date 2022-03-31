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
            this.value = this.add(firstNumber, secondNumber);
        } else if (operator == "subtract") {
            this.value = this.subtract(firstNumber, secondNumber);

        } else if (operator == 'multiply') {
            this.value = this.multiply(firstNumber, secondNumber);
        } else{
            if(secondNumber === 0){
                alert("Please enter a non zero second number as division with zero is undefines");
                return "undefined";
            }else{
                this.value = this.divide(firstNumber, secondNumber);
            }     
        }

        return Math.round(this.value * 100)/100;
    
    }


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