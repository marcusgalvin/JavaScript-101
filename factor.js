//Directions:
//Return the factorial of the provided integer.


// Given Code:
// function factorialize(num) {
//   return num;
// }
// factorialize(5);



//Solution
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);