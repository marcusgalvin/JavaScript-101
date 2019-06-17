//Directions:

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



//Given Code:




function spinalCase(str) {
  
  return str;
}

spinalCase('This Is Spinal Tap');

//Solution:

function spinalCase(str) {
    
  // use regex to create white spaces with underscores
  
  var regex = /\s+|_+/g;

//.replace puts a space in front of all uppercase characters

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  
  return str.replace(regex, '-').toLowerCase();
}

//call function

spinalCase('This Is Spinal Tap');