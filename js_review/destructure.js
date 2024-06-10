/*
 * 객체 구조분해 
 */

let emp = {empName : 'scott', dept : '개발', hireDate : '2019-11-01'};

let {empName,dept} = emp;
//console.log(empName,dept);

//객체 복사
// 얕은복사
let emp1 = emp;
emp.empName = 'kim';
console.log(emp1.empName);

//깊은복사
let emp2 = {...emp}; 
/*
 * 배열 구조분해 
 */
let arr = ['a','b','c'];
let [first,sec,trd] = arr;
//console.log(first);