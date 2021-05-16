function* getUniqueID() {
    var uniqueNumber = 0;
    while (true) {
      yield uniqueNumber++;
    }
  }
  
  const uniqueID = getUniqueID();
  
  console.log(uniqueID.next().value); // output: 0
  console.log(uniqueID.next().value); // output: 1
  console.log(uniqueID.next().value); // output: 2