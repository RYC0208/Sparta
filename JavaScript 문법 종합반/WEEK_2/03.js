// 단축 속성명 : property shorthand

const name = "nbc";
const age = "30";

// key ~ value
const obj1 = {name,age};
const obj2 = {name : name, age : age};

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 se6 문법 중 하나
let arr = [1,2,3];
console.log(arr);
console.log(...arr);

let newArr = [...arr, 4];
console.log(newArr);

// 객체
let user = {
    name: 'nbc',
    age: 30,
}

let user2 = { ...user};

console.log(user);
console.log(user2);

//나머지 매게변수(rest parameter)
function examplefunc (a,b,c,...args) {
    console.log(a,b,c,);
    console.log(args);
}

examplefunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
const testValue = "안녕";
console.log(`Hello World ${testValue}`);
console.log(`
    Hello
        My name is JavaScript!!!!
        
        Nice to meet you!!!
`);


