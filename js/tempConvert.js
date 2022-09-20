// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

let fTemp = 45;
let fToCel = (fTemp - 32) * 5 / 9;
let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);