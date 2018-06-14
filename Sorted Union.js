/*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function uniteUnique(arr) {

  var newArray = [];

  // double nested for loop to loop through arguments then it's arrays, then loop through newArray to check if number already exists there, and if not, then add it

  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++) {
      var alreadyExists = false;
      for (var k = 0; k < newArray.length; k++) {
        if (arguments[i][j] == newArray[k]) {
          alreadyExists = true;
        }
      }
      if(alreadyExists == false) {
        newArray.push(arguments[i][j]);
      }
    }
  }

  return newArray;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/