//Directions


// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, 
// that takes an array and an element as arguments.
// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.


//Given Code:

function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



//Solution

function quickCheck(arr, elem) {
  if(arr.indexOf(elem)>=0) {
    return true;
  }
  return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));