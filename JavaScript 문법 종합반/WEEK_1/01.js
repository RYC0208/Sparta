//변수, 상수
// 변수 = 메모리에 저장하고 읽어들여서 재사용한다.


//변수의 5가지 주요 개념

// 변수 이름 :  저장된 값의 고유 이름
// 변수 값 : 변수에 값을 저장하는 행위
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 1.var 똑같은 이름으로 다시 선언이 가능함, 값을 재할당 가능함
var myVar = "Hellow World";
var myVar = "Test 1";
myVar = "GoodBye";
console.log(myVar);

// 2. let 값을 재할당 가능함
let myLet = "Hello World";
myLet = "GoodBye 1";
console.log(myLet);

// 3. const 값을 변경할 수 없음.
const myConst = "Hello World";
console.log(myConst);