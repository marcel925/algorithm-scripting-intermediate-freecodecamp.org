/*
Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function spinalCase(str) {
 
  // split into array, then use for loop to add a space in front of capital letter, in case one doesn't yet exist (such as in a camel cased string)

  var array = str.split("");
  

  for (var i = 0; i < array.length; i++) {
    if (array[i].toUpperCase() == array[i]) {
       array.splice(i, 0, " ");
       i++;
    }
  }
  
  // join the array into a string, then split it by space, underscore or non word

  var newStr = array.join("");

  var newArr = newStr.toLowerCase().split(/[\s\W|"_"]/);
  
  // use a loop to remove elements from the array which are a space or non letter characters, then join into a string by dashes & return it

  var removedSpacesArray = [];

  for (var i = 0; i < newArr.length; i++) {
    if (!(newArr[i] == "" || newArr[i] == "_" || newArr[i] == "-")) {
      removedSpacesArray.push(newArr[i]);
    }
  }

   return removedSpacesArray.join("-");
}

spinalCase('This Is Spinal Tap');


/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/