var obj1 = {
    outer: function () {
        console.log("메소드로서 호출 =>", this) // (1)
        var innerFunc = function() {
            console.log("함수로서 호출 =>", this); //(2), (3)
        };
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc,
        };
        obj2.innerMethod();
    },
};
obj1.outer();



// 