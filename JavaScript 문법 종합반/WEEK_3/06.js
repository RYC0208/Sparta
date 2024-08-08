
// var n = null;
// console.log(typeof n); //object

// //동등 연산자( equality opertor)
// console.log(n == undefined); // true
// console.log(n == null);// true

// //일치 연산자(identity operator)
// console.log(n === undefined); // false
// console.log(n === null); // true

const original = {
    name: "John",
    age: 30
  };
  
  // 얕은 복사
  const shallowCopy = { ...original };
  
  // 변경
  shallowCopy.name = "Jane";
  shallowCopy.age = 25;
  
  console.log(original.name); // John (영향 없음)
  console.log(original.age); // 30 (영향 없음)
  console.log(shallowCopy.name); // Jane
  console.log(shallowCopy.age); // 25