// We will use same array - arrCity over here,

const newArrCity = arrCity.map((city) => ({
    ...city,
    newCity: true,
  }));
  console.log(newArrCity); 
  
  // output: 
  [{
    id: 1,
    name: "London",
    newCity: true, // new key-pair 
    region: "UK"
  }, {
    id: 2,
    name: "Paris",
    newCity: true, // new key-pair 
    region: "Europe"
  }, {
    id: 3,
    name: "New York",
    newCity: true, // new key-pair 
    region: "United State"
  }]