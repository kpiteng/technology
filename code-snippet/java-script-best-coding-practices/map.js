var arrCity = [
    {
    'id': 1,
    'name': 'London',
    'region': 'UK',
    },
    {
    'id': 2,
    'name': 'Paris',
    'region': 'Europe',
    },
    {
    'id': 3,
    'name': 'New York',
    'region': 'United State',
    },
   ]
   
   const arrCityName = arrCity.map(city => city.name);
   console.log(arrCityName); // output: ['London', 'Paris', 'New York']