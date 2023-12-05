const result = false; //요청성공여부

const promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            if (result) {
                resolve('성공');
            } else {
                reject('실패');
            }

        }, 3000)
    }
);

promise
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {  //에러 -> 변수명이므로 아무거나 써도 됨.
        console.log(error);
    });