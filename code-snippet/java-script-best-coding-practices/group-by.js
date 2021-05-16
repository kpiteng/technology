var arrCity = [
    {'region': 'Europe', 'name': 'Paris'},
    {'region': 'Europe', 'name': 'Amsterdam'},
    {'region': 'Europe', 'name': 'Vienna'},
    {'region': 'UnitedStates', 'name': 'New York'},
    {'region': 'UnitedStates', 'name': 'San Francisco'},
    {'region': 'Europe', 'name': 'Barcelona'},
   ]
   
  var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
    }, {});
  };
  
  var resultByRegion = groupBy(arrCity, 'region'); // pass array & key-name
  
  console.log(resultByRegion);
  //output: 
  {
    'Europe': [
      {name: "Paris", region: "Europe"}, 
      {name: "Amsterdam",region: "Europe"}, 
      {name: "Vienna",region: "Europe"}, 
      {name: "Barcelona",region: "Europe"}
    ],
    'UnitedStates': [
      {name: "New York",region: "UnitedStates"}, 
      {name: "San Francisco",region: "UnitedStates"}
    ]
  }