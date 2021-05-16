const arrCity = [
    {'id':'1', 'name':'London'},
    {'id':'2', 'name':'Paris'},
    {'id':'3', 'name':'New York'}
  ];
  
  const index = arrCity.findIndex(city => city.name === 'Paris');
  console.log(index); // output: 1