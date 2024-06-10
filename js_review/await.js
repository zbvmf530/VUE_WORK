

// 동기식 처리
async function callAPI(){
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
    console.log("fetch 호출");
}

callAPI();
