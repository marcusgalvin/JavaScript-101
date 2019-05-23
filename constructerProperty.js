//Directions:

// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property,
//return true if the candidate is a Dog, otherwise return false.

//given code:
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  
}

//Solution:

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  }
  else {
    return false;
  }
}