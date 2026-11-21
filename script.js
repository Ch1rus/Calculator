
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
let previousOperation = 0

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

one.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 1
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )
two.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 2
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

three.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 3
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

four.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 4
    display.textContent = displayNumber
   console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

five.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 5
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

six.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 6
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

seven.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 7
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

eight.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 8
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

nine.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 9
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )

zero.addEventListener("click", (event) =>{
    displayNumber = 10*Number(displayNumber) + 0
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
    if(previousOperation == "+"){
    fullNumber = displayNumber + fullNumber
    displayNumber = 0
    }
    if(previousOperation == "-"){
        fullNumber = fullNumber - displayNumber
        displayNumber = 0
    }
    if(previousOperation == "x"){
    fullNumber = operate(
                    multiply,
                    Number(displayNumber), 
                    Number(fullNumber)
    ) 
     displayNumber = 0
    }
    if(previousOperation == "÷"){
        fullNumber = operate(
                    divide,
                    Number(fullNumber), 
                    Number(displayNumber)
    ) 
    displayNumber = 0
    }
    display.textContent = fullNumber
   console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
})

btnAddition.addEventListener("click",(event) =>{
  display.textContent = 0;
  
  if (Number(fullNumber) == 0){
    display.textContent = fullNumber
    
  }
  
  if (fullNumber != 0) {
    fullNumber = operate(
    add,
    Number(displayNumber), 
    Number(fullNumber)
  )
    
    display.textContent = fullNumber
  }
  previousOperation = "+"
  fullNumber = operate(
    add,
    Number(displayNumber), 
    Number(fullNumber)
  )
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )

btnSubtract.addEventListener("click",(event) =>{
  display.textContent = 0;
  if (fullNumber == 0){
    display.textContent = fullNumber
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
  if (fullNumber == 0){
    display.textContent = fullNumber
   fullNumber = displayNumber
   displayNumber = 0
       console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation) 
     return previousOperation = "x"
  }

  previousOperation = "x"
  fullNumber = operate(
    multiply,
    Number(displayNumber), 
    Number(fullNumber)
  )  
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )

btnDivide.addEventListener("click",(event) =>{
  display.textContent = 0;
  if (fullNumber == 0){
    display.textContent = fullNumber
   fullNumber = displayNumber
   displayNumber = 0
       console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation) 
     return previousOperation = "÷"
  }

  previousOperation = "÷"
  fullNumber = operate(
    divide,
    Number(fullNumber), 
    Number(displayNumber)
  )  
  displayNumber = 0
  console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
  
} )


btnClear.addEventListener("click", (event) =>{
   
    displayNumber = 0
    fullNumber = 0
    previousOperation = 0
    display.textContent = displayNumber
    console.log("this is display number", displayNumber, "this is full number", fullNumber, "Previous operation",previousOperation)
} )



