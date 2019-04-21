//Directions:
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
//Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.


//Given Code

// function convertToF(celsius) {
//   let fahrenheit;
//   return fahrenheit;
// }

// convertToF(30);



//Solution


function convertToF(celsius) {
      // Only change code below this line
      var fahrenheit = (celsius * (9/5)) + 32;

      // Only change code above this line
      if ( typeof fahrenheit !== 'undefined' ) {
      return fahrenheit;
      } else {
        return 'fahrenheit not defined';
      }
    }

    // Change the inputs below to test your code
    convertToF(30);
