// Let's use arrCity over here,

arrCity.map(city => city.cityWithName = city.name + ' - ' + city.region);
console.log(arrCity); 

// output: 
[{
  cityWithName: "London - UK", // new key-pair 
  id: 1,
  name: "London",
  region: "UK"
}, {
  cityWithName: "Paris - Europe", // new key-pair 
  id: 2,
  name: "Paris",
  region: "Europe"
}, {
  cityWithName: "New York - United State", // new key-pair 
  id: 3,
  name: "New York",
  region: "United State"
}]