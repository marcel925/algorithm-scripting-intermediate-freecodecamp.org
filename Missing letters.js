/*
Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function fearNotLetter(str) {

  var firstLetterCharCode = str.charCodeAt(0);

  var strLength = str.length;  

  var correctArray = [];

  // for loop to create a correct range from first letter with same str length

  for (var i = firstLetterCharCode; i < firstLetterCharCode + strLength; i++) {
    var letter = String.fromCharCode(i);
    correctArray.push(letter);
  }

  var correctString = correctArray.join("");

  //if correct string equals original string, then no letter is missing, so return underfined

  if (correctString == str) {
    return undefined;
  }

  //loop through correct string & origial string. When a difference is found, then the letter from correct array is the missing letter, so return missing letter

  for (var i = 0; i < correctString.length; i++) {
    if (!(correctString[i] == str[i])) {
      return correctString[i];
    }
  }
}

fearNotLetter("abce");


/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/