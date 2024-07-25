// 배열

// 1. 생성
// 1-1 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2 크기 지정
let number = new Array(5);

console.log(fruits.length);
console.log(number);

//2. 요소 접근

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3 배열 메소드
// 3-1 push
console.log("1 : " + fruits);
fruits.push("키위");
console.log("2 : " + fruits);

// 3-2 pop

console.log("3 : " + fruits);
fruits.pop();
console.log("4 : " + fruits);

// 3-3 shift
console.log("5 : " + fruits);
fruits.shift();
console.log("6 : " + fruits);

// 3-4 unshift
fruits.unshift("배");
console.log("7 : " + fruits);

// 3-5 splice
fruits.splice(1, 1, "포도");
console.log("8 : " + fruits);

// 3-6 slice
let slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits);
