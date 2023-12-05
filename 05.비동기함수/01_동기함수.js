
function first(){
    second();
    console.log('첫번째');
}

function second(){
    third();
    console.log('두번째');
}

function third(){
    console.log('세번째');
}

first();
//호출순서: 1 -> 2 -> 3
//실행순서 3 -> 2 -> 1