// for(i=5; i<=100; i+=5){
//     console.log(i);
// }


// function printNumbers(num){
//     for(i=num; i<=10; i++){
//         console.log(i);
//     }
// }
// printNumbers(3);

// function sumUpTo(n){
//     let sum = 0;

//     for(i=0; i<=n; i++){
//         sum += i;
//     }
//     console.log("결과 값: " + sum);
// }
// sumUpTo(10);

// function printEvenNumbers(arr){
//     let arr2 = {};
//     for(i=0; i<= arr.length; i++){
//         if(arr[i]%2 === 0){
//             arr2 += arr[i];
//         }
//     }
//     console.log("출력 : " + arr2);
// }
// printEvenNumbers([1,2,3,4,5,6,7,8,9,10,20,30,15,25]);

// function printTest(arr){
//     for(i=0; i<=arr.length; i++){
//         if(arr[i]%3 === 0){
//             console.log(arr[i]);
//         }
//     }
// }

// printTest([2,5,10,12,15,17,21]);

function printReversed(arr){
    for(i=arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }
}
printReversed([1, 2, 3, 4, 5]);

function getName(person){
    
   return person['name'];
}
const name1 = getName({ name: 'Alice', age: 25 });
console.log(name1); // 출력: Alice  