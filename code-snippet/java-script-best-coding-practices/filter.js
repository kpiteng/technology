var arrCity = [
    {'region': 'Europe', 'name': 'Paris'},
    {'region': 'Europe', 'name': 'Amsterdam'},
    {'region': 'Europe', 'name': 'Vienna'},
    {'region': 'UnitedStates', 'name': 'New York'},
    {'region': 'UnitedStates', 'name': 'San Francisco'},
    {'region': 'Europe', 'name': 'Barcelona'},
   ]
   
  const arrEuropeCity = arrCity.filter(city => city.region === 'Europe')
  
  console.log(arrEuropeCity); 
  
  // output:
  [
    {name: "Paris", region: "Europe"}, 
    {name: "Amsterdam", region: "Europe"}, 
    {name: "Vienna", region: "Europe"},
    {name: "Barcelona", region: "Europe"}
  ]