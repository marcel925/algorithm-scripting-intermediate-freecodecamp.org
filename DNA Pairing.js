/*
Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


// perhaps there is a shorter way of doing this, and it wouldn't scale when there are many pairs of elements, but it's short enough and works well for this example

function pairElement(str) {

  var array = str.split("");

  var resultArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] == "A") {
      resultArray.push(["A", "T"]);
    }
    if (array[i] == "T") {
      resultArray.push(["T", "A"]);
    }
    if (array[i] == "G") {
      resultArray.push(["G", "C"]);
    }
    if (array[i] == "C") {
      resultArray.push(["C", "G"]);
    }
  }
 
  return resultArray;
 }

pairElement("GCG");



/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/