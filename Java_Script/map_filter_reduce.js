// map, filter and reduce

// 1.Map------------------->>>
// const arr = [1, 2, 3, 4];
// const multiple_three = arr.map((element, index, resultArr) => {
//   return element * 3;
// });

// console.log("The resulted array is ", multiple_three);
// console.log("type is ", typeof multiple_three);

// ii)PolyFill
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4];
// const multiple_three = arr.myMap((element, index, resultArr) => {
//   return element * 3;
// });

// console.log("The resulted array is ", multiple_three);
// console.log("type is ", typeof multiple_three);

// 2.Filter------------------->>>
// const arr = [1, 2, 3, 4];

// const greaterThanOne = arr.filter((element, index, resultArr) => {
//   return element > 1;
//   console.log("is", resultArr);
// });

// console.log(greaterThanOne);

// ii)PolyFill
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4];
// const graterThanOne = arr.myFilter((element) => {
//   return element > 1;
// });

// console.log("The resulted array is ", graterThanOne);

// 3.Reduce------------------->>>
const arr = [1, 2, 3, 4];

const sum = arr.reduce((accumulator, element, index, resultArr) => {
  return accumulator + element;
});

console.log(sum);

// ii)PolyFill
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4];
// const graterThanOne = arr.myFilter((element) => {
//   return element > 1;
// });

// console.log("The resulted array is ", graterThanOne);
