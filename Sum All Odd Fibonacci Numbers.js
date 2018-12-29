/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function sumFibs(num) {

  var fibArray = [1, 1];

  // while loop to create a Fibonacci Numbers sequence. It will have 1 extra number, so use array.pop to remove the last value in the array
  
  while (fibArray[fibArray.length - 1] <= num) {
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  }

  fibArray.pop();

  // filter out the odd numbers using array.filter

  var filteredFib = fibArray.filter((num) => num % 2 == 1);
 
  // for loop to sum of the numbers in the filteredFib array, then return sum

  var sum = filteredFib.reduce((total, num) => total + num);

  return sum;
}

sumFibs(1000);



/*
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/
