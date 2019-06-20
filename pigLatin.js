//Directions: Translate the provided string to pig latin.

//Solution: ----- still in progress

function translatePigLatin(str) {

  //create empty variable for output
  var result = '';

  //go to regexr.com and find a sequence that finds all vowels, globally
  var regex = /[aeiou]/gi;

  // check all words to see if the 1st letter ex(str[0]) contains a vowel
  if (str[0].match(regex)) {

  //if above is true -> then add 'way' to end end of each word, making it piglatin
    result = str + 'way';

  //and if the string does not match the regex variable (aka if above code is false then...)

   // Check if the string contains only consonants
    } else if(str.match(regex) === null) {

//if so... add 'ay' to the string
   result = str + 'ay';
    } else {
        
// Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
    
    
    
   


return result;




