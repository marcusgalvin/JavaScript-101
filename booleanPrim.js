//Directions:

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

//Given Code:

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);


//Solution:

function booWho(bool) {
      return typeof bool === 'boolean';
    }

    // test here
    booWho(null);