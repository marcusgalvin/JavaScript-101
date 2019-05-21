//Directions:
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

//given code:
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

//solution:

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);