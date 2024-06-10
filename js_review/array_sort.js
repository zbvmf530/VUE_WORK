// let fruit = ['banana','오렌지','망고','apple'];

// fruit.sort((a,b)=> a.length-b.length);
// console.log(fruit);
// fruit.reverse();
// console.log(fruit);

// fruit.sort((a,b)=>{
//     if(a>b) return 1;
//     else if(a==b) 0;
//     else return -1;
// })
// console.log(fruit);


// 객체배열 정렬

let arrEmp = [
    {empName : 'scott', dept : '개발', hireDate : '2019-11-01', score : 90},
    {empName : 'tony', dept : '기획', hireDate : '2020-11-01', score : 95},
    {empName : 'alice', dept : '총무', hireDate : '2021-11-01', score : 100}
];

// console.log(arrEmp);
// arrEmp.sort((a,b)=>{
//             if(a.empName>b.empName) return 1;
//             else if(a.empName==b.empName) 0;
//             else return -1;
//         })
// ;
// console.log(arrEmp);

// arrEmp.sort((a,b)=>b.score-a.score);

// console.log(arrEmp);

// filter
// console.log(arrEmp.filter(a=>a.dept!='개발'));

// console.log('성적이 95점 이상인 사원');
// console.log(arrEmp.filter(a=>a.score>=95));

// console.log('성적이 95점 이상인 사원');
// console.log(arrEmp.find(a=>a.score>=95));

