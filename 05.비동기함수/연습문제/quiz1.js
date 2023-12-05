setTimeout(function callback(){
    console.log('첫번째 타이머 종료')
},5000);

setTimeout(function callback(){
    console.log('두번째 타이머 종료')
},0);

setTimeout(function callback(){
    console.log('세번재 타이머 종료')
},3000);

//정답: 2-3-1 순서로 실행
//비동기함수 -> 5초 걸린다.
//동기함수 -> 8초 걸린다.
