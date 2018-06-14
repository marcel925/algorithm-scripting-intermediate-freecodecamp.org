/*
Intermediate Algorithm Scripting: Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function binaryAgent(str) {
  
  var array = str.split(" ");

  // for loop to turn binary numbers into decimals / base 10 numbers. Then push decimals to decimalsArray

  var decimalsArray = [];
  
  for (var i = 0; i < array.length; i++) {

    var splitArray = array[i].split("");
    
    var decimal = 0;
    var p = 7;

    for (var j = 0; j < splitArray.length; j++) {
      var num = parseInt(splitArray[j]) * Math.pow(2, p);
      decimal = decimal + num;
      p = p - 1;
    }

    decimalsArray.push(decimal);
  }

  // loop through array and turn each ASCII Code to letter. Then push letter to lettersArray. Then return a joined lettersArray

  var lettersArray = [];

  for (var i = 0; i < decimalsArray.length; i++){
    var letter = String.fromCharCode(decimalsArray[i]);
    lettersArray.push(letter);
  }

  return lettersArray.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


/*
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/