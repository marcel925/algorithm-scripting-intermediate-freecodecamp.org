/*
Intermediate Algorithm Scripting: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function translatePigLatin(str) {

    var array = str.split("");

    var noVowels = true;

    //loop to check if there are no vowels first

    for (var i = 0; i < array.length; i) {
      console.log(i);
      if (array[i] == "a" || array[i] == "e" || array[i] == "i" ||array[i] == "o" || array[i] == "u") {
        noVowels = false;
        break;
      } else {
        i++;
      }
    }

    //if no vowels, push "ay" and finish, or/else: if vowel is first then push "way", or/else: execute function moveConsonants 

    if (noVowels) {
      array.push("ay");
    } else {

      if (array[0] == "a" || array[0] == "e" || array[0] == "i" ||array[0] == "o" || array[0] == "u") {
        array.push("way");
        } else {
          moveConsonants(array);
        }
    }

    // function checks first letter in array. if it's a consonant, it moves it to end, then runs itself again through recursion. if not a consonant, then adds "ay"

    function moveConsonants (array) {
      if (!(array[0] == "a" || array[0] == "e" || array[0] == "i" ||array[0] == "o" || array[0] == "u")) {
        var first = array.shift();
        array.push(first);
        moveConsonants(array);
      } else {
        array.push("ay");
      }
    }

    return array.join("");

}

translatePigLatin("california");


/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/