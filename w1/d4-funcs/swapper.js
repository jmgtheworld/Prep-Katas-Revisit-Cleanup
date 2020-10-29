const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');

  // Put your solution here

  for (element in key1) {
    let object2Value = object2[key2[element]]
    object2[key2[element]]  = object1[key1[element]];
    object1[key1[element]] = object2Value
  }
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

// swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
// swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
// swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });
// const driver = function (key1, object1, key2, object2, action) {
//   for (element in key1) {
//     action(key1[element], object1, key2[element], object2);
//   }
// }

//driver (['a','c'], { a: 1 , b: 3, c: 3, d: 7 }, ['b','a'], { a: 4, b: 0, c: 5 }, swapper)
swapper(['a','c'], { a: 1 , b: 3, c: 3, d: 7 }, ['b','a'], { a: 4, b: 0, c: 5 });
