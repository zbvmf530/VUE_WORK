// let arr1=[1,2];
// let arr2=[3,4];
// let arr3=[...arr1,...arr2];
// console.log(arr3[0]);

const chars = [ 'sun','mon','tue','wed','thu','fri'];
let s = chars[0];
let  [a,b,...arr] = chars;
console.log(a,b, arr[0]);