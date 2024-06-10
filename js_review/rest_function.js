/*
함수 매개변수에 rest 연산자
*/

function total(num,...arr){
    console.log('합계: '+arr.reduce((total, currentVal)=>total+currentVal,num));
}

 //total(10);
// total(10,20);
total(10,20,30);