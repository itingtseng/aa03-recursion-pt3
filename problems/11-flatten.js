/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

//base: arr[0].isArray(arr)
//recursive
//step arr[0]
function flatten(arr) {
  // Your code here 

  // console.log('this is arr: ' + arr)
  // console.log('this is arr.length: ' + arr.length)
  // console.log('this is arr.slice(-1): ' + arr.slice(-1))
  // console.log('this is arr.slice(0): ' + arr.slice(0))
  // console.log('this is arr[0]: ' + arr[0])
  // console.log('this is arr[arr.length-1]: ' + arr[arr.length - 1])

  let res = []

  for (let i = 0; i < arr.length; i++){
    
    if (!Array.isArray(arr[i])) {
      res.push(arr[i])
   }
    else {
      res.push(...flatten(arr[i]))
    }
  }
  return res
}

function flatten(arr) {
  if (arr.length === 0) {
    return arr
  }
  if (!Array.isArray(arr[0])) {
    return [arr[0], ...flatten(arr.slice(1))];
  } else {
    return [...flatten(arr[0]), ...flatten(arr.slice(1))]
  }
}

// function flatten(arr) {
//   // Your code here 
//   if (arr.length === 0) {
//     return []
//   }
//   return arr.flatMap(el => {
//     if(Array.isArray(el)) {
//         return flatten(el);
//     } else {
//       return el;
//     }
//   });
// }


// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  