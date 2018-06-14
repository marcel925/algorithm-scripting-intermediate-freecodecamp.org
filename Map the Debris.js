/*
Intermediate Algorithm Scripting: Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var result = [];
  
  //for loop to loop through each pair of name & avgAlt

  for (var i = 0; i < arguments[0].length; i++) {

    var avgAlt = parseFloat(arguments[0][i]["avgAlt"]);

    var namevar = arguments[0][i]["name"];

    // below is the formula for finding the orbital period

    var orbitalPeriodVar = 2 * Math.PI * (  Math.sqrt( (Math.pow(avgAlt + earthRadius, 3)  ) / GM )  );

    orbitalPeriodVar = Math.round(orbitalPeriodVar);

    result.push({name: namevar, orbitalPeriod: orbitalPeriodVar});

  }
  
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



/*
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/