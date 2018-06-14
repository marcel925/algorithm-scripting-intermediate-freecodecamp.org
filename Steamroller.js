/*
Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function steamrollArray(arr) {
  
  var oneArray = [];

  flatten(arr);

  function flatten(arr) {

    for (var i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        oneArray.push(arr[i]);
      } else {
        flatten(arr[i]);
      }
    }

  }
  
  return oneArray;

}

steamrollArray([1, [2], [3, [[4]]]]);



/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/