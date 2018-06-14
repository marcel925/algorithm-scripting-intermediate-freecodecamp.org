/*
Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function smallestCommons(arr) {

  // first, sort the array to make sure first number is smaller
   
   var array = arr.sort(function(a, b){
     return a - b;
   });

   // function finds smallest multiple between x & y through the brute force method

   function smallestMultipleFunc(x, y) {
     for (var i = 1; i <= y; i++) {
       if(Number.isInteger((x * i) / y)) {
         return x * i;
       }
     }
   }

    // to find smallest multiple of 6 & 7 & 8, you can find smallest of 6 & 7, which is 42, then find the smallest common multiple of 42 & 8, which is 168.
    // I'm applying that logic using a for loop to find lowest common multiple of first 2 numbers, then the result of that and 3rd number, then result & 4th number and so on

    var smallestMultiple = array[0];

    for (var i = array[0] + 1; i <= array[1]; i++) {
      var result = smallestMultipleFunc(smallestMultiple, i);
      smallestMultiple = result;
    }

    return smallestMultiple;
}


smallestCommons([1,5]);


/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/