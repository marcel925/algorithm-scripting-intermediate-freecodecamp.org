/*
Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function convertHTML(str) {

  //Split to array. Then loop through array & change special characters & add the rest as it was. Then join back to string

  var array = str.split("");

  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] == "&") {
      newArray.push("&amp;");
    }
    else if (array[i] == "<") {
      newArray.push("&lt;");
    }
    else if (array[i] == ">") {
      newArray.push("&gt;");
    }
    else if (array[i] == '"') {
      newArray.push("&quot;");
    }
    else if (array[i] == "'") {
      newArray.push("&apos;");
    }
    else {
      newArray.push(array[i]);
    }
    
  }

  return newArray.join("");
}

convertHTML("Dolce & Gabbana");


/*
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/