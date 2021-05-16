const region = {
    "id": 1,
    "name": "Europe",
    "city": ['Paris', 'Vienna', 'Amsterdam'],
  };
  
  const {id, name} = region;
  const {0: paris, 2: amsterdam} = region.city;
  
  console.log(id); // 1
  console.log(name); // Europe
  console.log(paris); // Paris
  console.log(amsterdam); // Amsterdam