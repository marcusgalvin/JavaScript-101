//Directions:

// Sum all the prime numbers up to and including the provided number.



//Given code:

function sumPrimes(num) {
  return num;
}

sumPrimes(10);

//Solution:
function sumPrimes(num) {
  var array = [];

  for (var i = 2; i <=num; i++ ){
    for(var j = 2; j<= i; j++){
      if(i===j){
          array.push(i);
      }
      if(i%j===0){
        break;
      }
    }
  }
  return array.reduce(function(x,y){return x+y;});
}

sumPrimes(10);