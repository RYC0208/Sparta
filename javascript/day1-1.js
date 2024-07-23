
// const a = 1;
// const b = 1.1;

// const str = "asdasd";
// const lengthofstr =  str.length;

// // replace = 대체하다
// const replacestr = str.replace("a", "g");

// const bool1 = true;
// const bool2 = false;

// const 로그인 = true;

// if(로그인){
//     alert(로그인);
// }else{
//     alert(로그인 + "x");
//     메인으로가라();
// }

// undefined, null = 없음

// let name;

// if(로그인) {
//     name = "홍길동";
// }else{
//     name = null;}
// let strnum = "42";
// console.log(Number(strnum) + 1);

// const num1 = 45;
// const num2 = "55";

// const num3 = num1 + Number(num2);
// console.log (num3);
// console.log ( 2 + 2);
// console.log ( 3 - 2);
// console.log ( 2 * 2);
// console.log ( 2 / 2);
// console.log ( 2 % 2);
// console.log ("heell" / 3 ); //nan 말이 안되는ㅇ 숫자

// let num4 = 12;
// let num5 = 22;

// console.log(num4 + num5);
// console.log(num4 - num5);
// console.log(num4 * num5);
// console.log(num4 / num5);
// console.log(num4  num5);

let x = 10;
// x = x + 5;
// x = x - 5;
// x = x * 5;

x += 5; //등호 연산자
x -= 5;
x *= 5;


// 일치 vs  동등연산자

// console.log (2 === "2");
// console.log ( 2 == "2");

// const 남자여부 = true;

// // !남자여부 논리 부정 연산자

// if (!남자여부 === false) {
//     console.log("저는 여자입니다.")
// } else{
//     console.log("저는 남자입니다.")
// }

// 논리곱(&&)
// const bool1 = true;
// const bool2 = false;
// const bool3 = true;
// const bool4 = true;

// const result = bool1 && bool2 && bool3 && bool4;

// console.log(result);
// 논리합

// const bool1 = false;
// const bool2 = false;
// const bool3 = true;

// const result = bool1 || bool2;

// console.log(result);

// // 함수
// // 이름, 인(매개변수 or 파라미터), 아웃

// //함수 선언문
// function 함수이름(인풋1, 인풋2, 인풋3) {

//     // 어떠한 동작 1


//     // 어떠한 동작 2

//     // 어떠한 동작 3

//     return 아웃풋;
// }
// //함수 표혀식
// const 함수이름 = function (인풋1, 인풋2, 인풋3) {
//     // 어떠한 동작 1
    
//     // 어떠한 동작 2

//     // 어떠한 동작 3
//     return 아웃풋;
// }

function 더하기하는함수(a, b){

    const c = a+b;
 return c;
}

console.log(더하기하는함수(1, 2));
