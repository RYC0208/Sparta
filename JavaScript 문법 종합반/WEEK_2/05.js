// 일급 객체로서의 함수 (2)

const person ={
    name : 'john',
    age : 31,
    isMarried: true,
    Hello : () =>{
     console.log(`Hello, my Name is ${this.name}`);
        // undifined가 나오는 이유는
        // 화살표 함수는 this를 바인딩 하지 않음
    },
    sayHello : function () {
        console.log(`Hello, my Name is ${this.name}`);
    }
}

person.Hello();
