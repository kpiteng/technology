function getCityInformation(city) {
    if (city.toLowerCase() === "london") {
      return "Welcome to London!";
    } else if (rhyme.toLowerCase() === "paris") {
      return "Welcome to Paris!";
    } else if (rhyme.toLowerCase() === "amsterdam") {
      return "Welcome to Amsterdam!";
    }
  
    return "We're Sorry, No City Found!";
  }
  const londonCityInfo = getCityInformation('London');
  
  console.log(londonCityInfo); // output: Welcome to London!