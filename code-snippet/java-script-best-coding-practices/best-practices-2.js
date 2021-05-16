function getCityInformation(city) {
    const cityInfo = {
      "london": "Welcome to London!",
      "paris": "Welcome to Paris!",
      "amsterdam": "Welcome to Amsterdam!",
    };
    
    return cityInfo[city.toLowerCase()] ?? "We're Sorry, No City Found!";
  }
  const pariseCityInfo = getCityInformation('Paris');
  
  console.log(pariseCityInfo); // output: Welcome to Paris!