//런타임
// run + time
// 코드가 돌아가는 그 환경

// 1. 노드
// 2. 브라우저
// 전역 환경에서 this는 -> 노드(global 객체), 브라우저(window 객체)

var obj = {
    methodA: function () { console.log(this) },
    inner: {
        methodB: function () { console.log(this)},
    }
};

obj.methodA();   // this === obj
obj['methodA'](); // this === obj

obj.inner.methodB(); // this === obj.inner
obj.inner['methodB'](); // this === obj.inner
obj['inner'].methodB(); // this === obj.inner
obj['inner']['methodB'](); // this === obj.inner