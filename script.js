
const add = function(a,b){
    return a + b
}
const subtract = function(a,b){
    return a - b
}
const multiply = function(a,b){
    return a*b
    }
const divide = function(a,b){
    return a/b
}
  

let fullNumber = 0
let displayNumber = 0
let negativeNumbers = 0
let previousOperation = 0

const tooBig = 21



const operate = function(pendingOperation,number1,number2){
    if (pendingOperation === add){
       return add(number1,number2)
    }
    else if (pendingOperation === subtract){
       return subtract(number1,number2)
    }
    else if (pendingOperation === multiply){
       return multiply(number1,number2)
    }
    else if (pendingOperation === divide){
       return divide(number1,number2)
    }
    
    else alert("revise code")
}


const realAddition = operate(
                    add,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 

const realSubtraction = operate(
                    subtract,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 

const realMultiplication = operate(
                    multiply,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 
const realDivision = operate(
                    divide,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 



const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display")


//for keeping the numbers it's *(whatever there was x10 + new number)*

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector(".zero")

const coma = document.querySelector(".coma")


//no actualizas el counter hasta que se clique el igual o alguna otra operación
one.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }

    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "1"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 1
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }

    if(displayNumber === 0){
         displayNumber = displayNumber + 1
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }
    displayNumber = displayNumber + "1"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )
two.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
    
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "2"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
     if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 2
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }

    if(displayNumber === 0){
         displayNumber = displayNumber + 2
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "2"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

three.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
    
   if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "3"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
     if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 3
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    
    if(displayNumber === 0){
         displayNumber = displayNumber + 3
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }
    displayNumber = displayNumber + "3"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

four.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
     
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "4"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 4
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(displayNumber === 0){
         displayNumber = displayNumber + 4
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "4"
    display.textContent = displayNumber
   console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

five.addEventListener("click", (event) =>{
     if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
    
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "5"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
     if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 5
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(displayNumber === 0){
         displayNumber = displayNumber + 5
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "5"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

six.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
    
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "6"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
     if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 6
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(displayNumber === 0){
         displayNumber = displayNumber + 6
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "6"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

seven.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
    
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "7"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
     if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 7
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(displayNumber === 0){
         displayNumber = displayNumber + 7
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "7"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

eight.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
     
   if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "8"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 8
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(displayNumber === 0){
         displayNumber = displayNumber + 8
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "8"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

nine.addEventListener("click", (event) =>{
     if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   }
    
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "9"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
     if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 9
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(displayNumber === 0){
         displayNumber = displayNumber + 9
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }

    displayNumber = displayNumber + "9"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

zero.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   } 
    if(previousOperation == "-" && displayNumber === 0 && fullNumber == 0){
    negativeNumbers = negativeNumbers + 0
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }
    if(previousOperation == "-" && displayNumber == 0 && fullNumber == 0 && negativeNumbers != 0){
    negativeNumbers = negativeNumbers + "0"
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }

     if(displayNumber === 0){
         displayNumber = displayNumber + 0
    display.textContent = displayNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }
    displayNumber = displayNumber + "0"
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

coma.addEventListener("click", (event) =>{
    if(displayNumber.length > tooBig || negativeNumbers.length > tooBig){
    return display.textContent = "Too long"
   } 

    if ((negativeNumbers +".") %1 !=0){
        return
    }
    if((displayNumber +".") % 1 != 0 ){//if there's already coma in displayNumber && negativeNumbers
        return
    }
    
    if(previousOperation == "-"  && fullNumber == 0){
    negativeNumbers = negativeNumbers + "."
    display.textContent = negativeNumbers
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative", negativeNumbers)
    }    
    
    displayNumber = displayNumber + "."
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )



const btnClear = document.querySelector("#clear")


const btnAddition = document.querySelector("#addition")
const btnSubtract = document.querySelector("#subtract")
const btnMultiply = document.querySelector("#multiply")
const btnDivide = document.querySelector("#divide")

const btnEqual = document.querySelector("#equal")

btnEqual.addEventListener("click", (event) =>{
   
   if (negativeNumbers != 0){
    return display.textContent = -negativeNumbers
   }
    if (fullNumber === 0){
        previousOperation = 0
        return display.textContent = displayNumber
    }
    if(previousOperation == "+"){
    fullNumber = displayNumber + fullNumber
    previousOperation = 0
    displayNumber = 0
    }
    if(previousOperation == "-"){
        fullNumber = fullNumber - displayNumber
        previousOperation = 0
        displayNumber = 0
    }
        if(previousOperation == "x" && displayNumber == 0){
    
    
    previousOperation = 0
     displayNumber = 0
       display.textContent = fullNumber
      return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }
    if(previousOperation == "x"){
    fullNumber = operate(
                    multiply,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 
    previousOperation = 0
     displayNumber = 0
    }
     if(previousOperation == "÷" && displayNumber == 0){
    
    
     previousOperation = 0
     displayNumber = 0
     display.textContent = fullNumber
     return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    }
    if(previousOperation == "÷"){
        fullNumber = operate(
                    divide,
                    Number(fullNumber), 
                    Number(displayNumber)
    ) 
    previousOperation = 0
    displayNumber = 0
    }
    display.textContent = fullNumber
   console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
})

btnAddition.addEventListener("click",(event) =>{
  if (negativeNumbers != 0){
    fullNumber = -negativeNumbers
    negativeNumbers = 0
    display.textContent = displayNumber
  }

  if (previousOperation == "x"){
    fullNumber = realMultiplication
   return display.textContent = fullNumber
  }
  
  if (Number(fullNumber) == 0){
    display.textContent = fullNumber
    
  }
  if (previousOperation == "+"){
    
     fullNumber = operate(
                    add,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 
    displayNumber = 0
    previousOperation = "+"
    display.textContent = fullNumber
     return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
     
  }
  
  //if (fullNumber != 0) {
   // fullNumber = operate(
    //add,
    //Number(displayNumber), 
    //Number(fullNumber)
  //)
    
   // display.textContent = fullNumber
 // }
  previousOperation = "+"
  fullNumber = operate(
    add,
    Number(displayNumber), 
    Number(fullNumber)
  )
  display.textContent = 0
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )

btnSubtract.addEventListener("click",(event) =>{
  display.textContent = 0;
  previousOperation = "-"
  if (fullNumber == 0){
    display.textContent = fullNumber
  }
  if (negativeNumbers != 0){
    fullNumber = -negativeNumbers
    negativeNumbers = 0
    display.textContent = displayNumber
  }
  // if the previous op is different to zero, the full number is zero, and the display number is zero then what changes is the full num, according to the previous op
  
  if (fullNumber == 0 && displayNumber != 0 && previousOperation =="-"){

  }
 
  if (displayNumber != 0 && fullNumber !=0 && previousOperation == "-"){
     fullNumber = operate(
    subtract,
    Number(fullNumber), 
    Number(displayNumber)
  )  
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  previousOperation = "-"
  return display.textContent = fullNumber
  }
   if (previousOperation == "+"){
    
     fullNumber = operate(
                    add,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 
    displayNumber = 0
    previousOperation = "-"
    display.textContent = fullNumber
     return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
     
  }
  //cuando pulsas igual, o, signo menos, si previous op ha sido -, el display number se vuelve negativo, si es differente a zero

  

  if (fullNumber == 0 && displayNumber != 0 && previousOperation != 0){
    display.textContent = displayNumber
    fullNumber = displayNumber
    displayNumber = 0
    display.textContent = 0
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  }
//   if (displayNumber == 0 && previousOperation != 0){
//     fullNumber = operate(
//                     subtract,
//                     Number(display.textContent), 
//                     Number(fullNumber)
//     ) 
//     display.textContent = Number(fullNumber)
//     return  console.log("this is display number", displayNumber, "this is full numbersdadad", fullNumber, "Previous operation",previousOperation)
//   }

  if (displayNumber == 0){
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
    display.textContent = fullNumber
    return fullNumber
  }
 
  previousOperation = "-"
  fullNumber = operate(
    subtract,
    Number(displayNumber), 
    Number(fullNumber)
  )  
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )

btnMultiply.addEventListener("click",(event) =>{
  display.textContent = 0;
  if (negativeNumbers != 0){
    fullNumber = -negativeNumbers
    negativeNumbers = 0
    display.textContent = displayNumber
  }
  
  if (displayNumber == 0){
    previousOperation = "x"
    display.textContent = fullNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation) 
  }
  if (fullNumber == 0){

   fullNumber = displayNumber
   displayNumber = 0
   display.textContent = 0
       console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation) 
     return previousOperation = "x"
  }

  previousOperation = "x"
  fullNumber = operate(
    multiply,
    Number(displayNumber), 
    Number(fullNumber)
  )  
  display.textContent = fullNumber
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )

btnDivide.addEventListener("click",(event) =>{
  display.textContent = 0;
  if (negativeNumbers != 0){
    fullNumber = -negativeNumbers
    negativeNumbers = 0
    display.textContent = displayNumber
  }
  
   if (displayNumber == 0){
    previousOperation = "÷"
    display.textContent = fullNumber
    return console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation) 
  }
  
  if (fullNumber == 0){

   fullNumber = displayNumber
   displayNumber = 0
    display.textContent = 0
       console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation) 
     return previousOperation = "÷"
  }

  previousOperation = "÷"
  fullNumber = operate(
    divide,
    Number(fullNumber), 
    Number(displayNumber)
  )  
  display.textContent = fullNumber
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )


btnClear.addEventListener("click", (event) =>{
   
    displayNumber = 0
    fullNumber = 0
    previousOperation = 0
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation, "negative",negativeNumbers)
    negativeNumbers = 0
} )



