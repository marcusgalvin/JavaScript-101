//Directions :
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.


//Given Code

// //function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }

//     results[n] = largestNumber;
//   }

//   return results;
// }



// Solution
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}