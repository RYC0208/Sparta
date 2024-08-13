var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0];

// numbers.forEach(function(number){
//     //현재 돌아가는 숫자가 맥스보다 큰 경우
//     if(number > max) {
//         max = number;
//     }

//     //~~
//     if(number < min){
//         min = number;
//     }
// });
numbers.forEach(function(number, idx){
    //현재 돌아가는 숫자가 맥스보다 큰 경우
    console.log(idx + "번째 값 => " + number);
});
console.log(max, min);