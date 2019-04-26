//Direcrion:

// Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

// Given Code:
// function popShift(arr) {
//   let popped; // change this line
//   let shifted; // change this line
//   return [shifted, popped];
// }

// // do not change code below this line
// console.log(popShift(['challenge', 'is', 'not', 'complete']));


//Solution:

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));