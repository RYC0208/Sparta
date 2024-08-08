// bind 메서드
// this를 바인딩 하는 메서드
// call, apply와는 좀 다르다 -> 즉시 호출하진 않음
// 목적
// 1. 함수에 this를 '미리' 적용함.
// 2. 부분 적용 함수

var func = function (a, b, c, d){
    console.log(this, a, b, c, d);
};
// func(1, 2, 3, 4); 

// 함수에 this를 미리 적용해보기
var bindFunc1 = func.bind({x: 1});
bindFunc1(5, 6, 7, 8);

// 부분 적용 함수
var bindFunc2 = func.bind({x: 1}, 4, 5);
// bindFunc2(6, 7);
bindFunc2(44, 12);

console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);
// name 프로퍼티
// bind = "bound" (수동태) 라는 접두어