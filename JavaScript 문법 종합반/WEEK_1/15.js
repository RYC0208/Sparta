//객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.
// 1 객체 생성 방법
// 1-1 기본적인 객체 생성

let person = {
    name : "김지수",
    age : 25,
    gender : "여성",
    mbti : "INFP",
    favorite : "IU, PUGB",
}

// 1-2 생성자 함수를 이용한 객체 생성 방법

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
console.log(person1);

//2. 접근하는 방법

console.log(person.name);
console.log(person.age);
console.log(person.gender);

//3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~)

// 3-1 Object.key() : key를 가져오는 메소드
let keys = Object.keys(person);
console.log(keys);

// 3-2 values
let values = Object.values(person);
console.log(values)

// 3-3 entries
// key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person);
console.log("entries => ", entries);

// 3-4 assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, {age : 31}, {gender : "남성"});
console.log(newPerson);

// 3-5 객체 비교
// 크기가 크다 => 메모리에 저장할 때 별도의 공간에 저장함
// 값이 같아도 객체가 다르면 서로 다른 공간에 별도로 저장함
let person2 = {
    name: "노용철",
    age: 25,
    gender: "남자",
};

let person3 = {
    name: "노용철",
    age: 25,
    gender: "남자",
};
console.log(person2 === person3)

console.log(JSON.stringify(person2) === JSON.stringify(person3));

//3-6 객체 병합
let person4 = {
    name: "노용철",
    age: 25,
};

let person5 = {
    gender: "남자",
};

let perfectMan = {...person4, ...person5}
console.log(perfectMan);