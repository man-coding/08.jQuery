
console.log('시작')

//타이머함수 인자: 실행할 함수 콜백함수(), 지연시간(밀리세컨드 *1000해줘야됨)
//3초를 대기하고 로그 출력
setTimeout(function callback(){
    console.log('timer 종료');    // <== 3초가 지난 후 실행됨.
}, 10000);

console.log('종료');