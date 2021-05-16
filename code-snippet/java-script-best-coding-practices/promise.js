const promise1 = new Promise((resolve, reject) => {
    resolve('promise1 was resolved.');
   });
   const promise2 = new Promise((resolve, reject) => {
    resolve('promise2 was resolved.');
   });
   const promise3 = new Promise((resolve, reject) => {
    resolve('promise3 was resolved.');
   });
   let result = Promise.any([promise1, promise2, promise3]);
   console.log(result); //output: promise1 was resolved. promise2 was resolved. promise3 was resolved.