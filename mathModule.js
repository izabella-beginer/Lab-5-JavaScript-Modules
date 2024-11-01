import { findMax } from "./arrayModule.js";

 // mathModule.js
export function add(num1,num2) { /* Your code here */
  return(num1+num2);
 }
export function subtract(num1, num2) { /* Your code here */ 
  return(num1-num2);
}
export default function multiply(num1, num2) { /* Your code here */ 
  return(num1*num2);
}

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(result.toString());
}

export function Max_Multiply(arrayNumbers) {
  const result=multiply(findMax,4);
  console.log(findMax(arrayNumbers)*4).toUpperCase().toString();
}