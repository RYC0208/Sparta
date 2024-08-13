// // 연산자(+, -, *, /, %)

// // 1. 더하기 연산자
// console.log(1 + 1);
// console.log(1 + "1");

// // 2. 뺴기 연산자
// console.log(1 - "2");
// console.log(1 - 2);

// // 3. 곱하기 연산자
// console.log(2 * 3);
// console.log("2" * 3);

// // 4. 나누기 연산자
// console.log(4 / 2);
// console.log("4" / 2);

// // 5. 나누기 연산자(/) vs 나머지 연산자(%)
// console.log(5 / 2);
// console.log(5 % 2);

// // 6. 할당 연산자(assignment)
// // 6-1. 등호 연산자(=)
// let x = 10;
// console.log(x);
// // 6-2. 더하기 등호 연산자(+=)
// x += 5;
// console.log(x);

// // 6-3. 빼기 등호 연산자(-=)
// x -= 5;
// console.log(x);

// x -= 20;
// console.log(x);

// let a = 10;
// a *= 2;

// console.log(a);

// // 비교 연산자 (true 또는 false를 반환)
// // 1. 일치 연산자(===)
// // 타입까지 일치해야 true를 반환하는 연산자

// // 숫자2가 숫자 2랑 같은지
// console.log(2 === 2);
// console.log(2 === "2");
// console.log("2" === 2);

// // 2. 불일치 연산자(!==)
// // 타입까지 일치해야 false를 반환하는 연산자

// console.log(2 !== 2);
// console.log(2 !== "2");
// console.log("2" !== 2);

// // 3. 작다 연산자(<)
// console.log(2 < 3);
// console.log(2 <= 3);
// console.log(3 <= 3);
// console.log(4 <= 3);

// // 4. 논리 연산자

// // 4-1(논리곱 연산자) : 모두 true일 때 true 반환
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log( false && false);

// // 4-2(논리합 연산자) : 두 값중 하나라도 true인 경우 true

// console.log(true || true);
// console.log(true || false);
// console.log( false || true);
// console.log( false || false);

// // 4-3(논리부정 연산자 => !)
// // : 값을 반대로 바꿈
// console.log("----------")
// console.log(!true)
// let g =  true;
// console.log(!g);

// // 5 삼항 연산자(중요!)
// // 조건에 따라 값을 선택함
// let w = 10;
// let result = (w > 5 ) ? "크다" : "작다";
// console.log(result)

// let y = 20;
// // 삼항 연산자를 이용하여 y가 10보다 작은 경우 작다

// let result2 = (y > 10) ? "크다" : "작다";
// console.log(result2)

// // 6. 타입연산자(type of)
// console.log(typeof "5");