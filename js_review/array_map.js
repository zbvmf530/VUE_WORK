//map

let arr = [1,2,3];

let result = arr.map(x=>x*x);
console.log(result);

let userArr= [
    {usrid : 1, score : 60},
    {usrid : 2, score : 50},
    {usrid : 3, score : 70},
    {usrid : 4, score : 40}
];

let newArr = userArr.map(ele=> ele.score>=60?{...ele,grade:true}:{...ele,grade:false});

console.log(newArr);