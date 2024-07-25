// const lion = {
//     name: "심바",
//     age: 3,
//     주인공: true,
//     대사: "하쿠나마타타",
// };

//나이를 추가하는 함수
// 명세서, 사용설명서
function incrementAge(lion) {
    lion.age = lion.age + 1;
    return lion;
}

//함수 실행 이후 사자의 현재 나이를 출력한다.
console.log(incrementAge({
    name: "심바",
    age: 3,
    주인공: true,
    대사: "하쿠나마타타",
}));

// 조건문
// if문

const x = 3;
if( x === 3){
    console.log("x는 3입니다.");
}else {
    console.log("x는 3이 아닙니다.")
}


function checkNumber(num) { 
    // 여기에 if-else 문을 작성하세요 } 
    // 예시 출력 checkNumber(5); 
    // 출력: "양수입니다." checkNumber(-3); 
    // 출력: "음수입니다." checkNumber(0); 
    // 출력: "0입니다."
    if(num === 0){
        console.log("0입니다.");
    }else if( num > 0){
        console.log("양수입니다");
    }else{
        console.log("음수입니다.");
    }
}
checkNumber(1);