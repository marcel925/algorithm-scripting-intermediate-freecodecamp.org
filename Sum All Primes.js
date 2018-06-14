/*
Intermediate Algorithm Scripting: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

// The syntax of this solution is quite short and effective, but I have a feeling that there are too many calculations getting done.
// I should come back to this and try to think of more efficient logic to solve this problem


function sumPrimes(num) {
  
  var primesArray = [];

  // nested for loop to find prime numbers. It takes a number and finds it's divisors, and if there are only 2 divisors, then it's a prime number, so it pushes it to primesArray

  for (var i = 2; i <= num; i++) {
    var divisorsArray = [];
    for (var j = 1; j <= i; j++) {
      if(Number.isInteger(i / j) == true){
        divisorsArray.push(j);
      }
    }
    if (divisorsArray.length == 2){
      primesArray.push(i);
    }
  }

  // a for loop to add sum all numbers in primesArray, then return the sum

  var sum = 0;

  for (var i = 0; i < primesArray.length; i++){
    sum = sum + primesArray[i];
  }

  return sum;

}

sumPrimes(10);


/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/