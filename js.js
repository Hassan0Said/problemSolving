//Basic Mathematical Operations
function basic_op(operator, value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        console.log("Both values must be numbers.");
        return null;
    }

    switch (operator) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;  
        case '*':
            return value1 * value2;
            break;
        case '/':
            if (value2 === 0) {
                console.log("Division by zero is not allowed.");
                return null;
            }
            else {
                return value1 / value2;
            }
            break;
        default:
            console.log("Invalid operator. Please Enter +, -, *, or /.");
            return null;
    }
}

let val1=parseFloat(prompt("Enter first value: "));
let op=prompt("Enter an operator (+, -, *, /): ");
let val2=prompt("Enter second value: ");
let result = basic_op(op, val1, val2);
if (result === null) {
    console.log("An error occurred during the operation.");
}
else {
    console.log(`The result of ${val1} ${op} ${val2} is: ${result}`);
}

//====================================================================================================================================//

//To Square Root or Not
function SquareRoot(array)
{
    return array.map(num => {
    if(typeof num !== 'number'){
        return null;
    }
    else if((Math.sqrt(num)* Math.sqrt(num)) === num){
        return Math.sqrt(num);
    }
    else{
        return Math.pow(num,2);
    }
        
    });
}

let arr=[4, 7, 16, 5, 36 , 64, 81, 100];
let sqrtResult = SquareRoot(arr);

if(sqrtResult === null || sqrtResult.includes(null)) {
    console.log("Error the all element of array must be numbers.");
}
else {
    console.log("The final array is:");
    sqrtResult.forEach((result, index) => {
        console.log(result+"\t");
    });
}

//====================================================================================================================================//

//Count By X
function countBy(x, n) {
    if (typeof x !== 'number' || typeof n !== 'number' || x <= 0 || n <= 0) {
        return [];
    }
    
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i * x);
    }
    return result;
}

let x =prompt("Enter a positive number (x): ");
let n =prompt("Enter a positive number (n): ");
let countResult = countBy(x, n);
 if(countResult.length === 0) {
        console.log("Both x and n must be positive numbers.");
   }
else {
    console.log(`Multiplication product of ${x} for ${n} times:`);
    countResult.forEach((result, index) => {
        console.log(result + "\t");
    });
}

//====================================================================================================================================//

//First Solution for Remove String Spaces(with Regular Expression)
function noSpace(x) {
    if (typeof x !== 'string') {
        return '';
    }
    return x.replace(/\s+/g, '');
}

let str = prompt("Enter a string with spaces: ");
let noSpaceResult = noSpace(str);
if (noSpaceResult === '') {
    console.log("The input must be a string.");
}
else {
    console.log(`String without spaces: ${noSpaceResult}`);
}

//====================================================================================================================================//

Second Solution for Remove String Spaces(with Loop)
function noSpace(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== ' ') {
            result += x[i];
        }
    }
    return result;
}

let str = prompt("Enter a string with spaces: ");
let noSpaceResult = noSpace(str);
if (noSpaceResult === '') {
    console.log("The input must be a string.");
}
else {
    console.log(`String without spaces: ${noSpaceResult}`);
}

//====================================================================================================================================//

Third Solution for Remove String Spaces(with Split and Join)
function noSpace(x) {
    return x.split(' ').join('');
}

let str = prompt("Enter a string with spaces: ");
let noSpaceResult = noSpace(str);
if (noSpaceResult === '') {
    console.log("The input must be a string.");
}
else {
    console.log(`String without spaces: ${noSpaceResult}`);
}

//====================================================================================================================================//

//Reversing Words in a String
let input = "I am here";
let output = input.split(" ").reverse().join(" ");
console.log(output);

//====================================================================================================================================//

//Keep Hydrated
function liters(times){
    return Math.floor(times*0.5);
}
console.log(liters(5));

//====================================================================================================================================//

//Convert a Number to a String
function Convert(number){
    //return String(number);
    return number.toString();
}
console.log(Convert(10));

//====================================================================================================================================//

//Calculate Average
function calc(arr) {
  return arr.length === 0 ? 0 : arr.reduce((acc, el) => acc + el, 0) / arr.length;
}
console.log(calc([10,20,30,40,50]));



