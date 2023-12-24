//*****************************  1  ***********************
//Create a variable called carName, and assign the value Volvo to it.
var carName = Volvo ;

//*****************************  2  ***********************
//Use comments to describe the correct data type of the following variables:
// integer
var length = 16; // integer


var lastName = "Johnson"; //string

var isGreaterThan10 = length > 10 //boolean

/* ***************************  3  ***********************
Fix the errors in the following functions:
func square1"x" { 
    return x * x ; 
    } */
function square1 (x) { 
    return x * x ; 
    }
/*
functionsquare2 x) 
return x * x ; 
}*/
function square2 (x){ 
return x * x ; 
}
/*function (x) square3 { 
return x * x;
}*/
function  square3(x) { 
    return x * x;

}
/******************************  4  ***********************
Write a JavaScript program that accepts two integers and displays the larger.*/
function larger (a,b)
{
    if (a>b)
    {
        return a ;
    }
    return b ;
}
/* *****************************  5  ***********************
Create a function called 'add'.
Tell it to accept two arguments (number1 and number2)
 - To pass multiple arguments into the function we separate them with a comma.
Tell it to return a sum of number1 and number2.
Call the function passing numbers 2 and 3 as arguments.
- To see the result you can console.log it.*/
function add(number1 , number2) {
    
    return number1+number2 ;

}
add(2,3)
/* *****************************  6  ***********************
Create another function named 'subtract',
Tell it to accept 2 arguments, number1 and number2, and subtract
number2 from number1 then return that value.
Call it with the numbers 5 and 1 and console.log the result.*/
function subtract(number1,number2){
    return number1-number2
}
subtract(5,1)
/*****************************  7  ***********************/
function operator (string){
    var a = 10
    var b = 5
    if (string === '+')
    {
        return add(a,b)
    } 
    else if (string === '-')
    {
        return subtract(a,b)
    }
}
/*****************************  8  ***********************
Let's create 2 more functions and name them 'divide' and 'multiply'.*/
function divide(number1 , number2){
    return Math.floor(number1/number2)
}
function multiply(number1,number2){
    return number1*number2
}
function operator (string){
    var a = 10
    var b = 5
    if (string === '+')
    {
        return add(a,b)
    } 
    else if (string === '-')
    {
        return subtract(a,b)
    }
    else if (string === '/')
    {
        return divide(a,b)
    }
    else if (string === '*')
    {
        return multiply(a,b)
    }
}