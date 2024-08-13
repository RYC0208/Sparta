//while

let i = 0;

// while(i < 10) {
//     //메인로직
//     //증감

//     console.log(i);
//     i++;
// }

// while( i < 100){
//     if(i > 3 && i % 5 === 0){
//         console.log(i);
//     }
//     i++;
// }

//do ~ while

// do{
//     console.log(i);
//     i++;
// }while(i < 10){

// }


// break; 반복문을 종료시킴

// for(i = 0; i<= 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }

// continue 반복문이 다음 순서로 시작됨
for(i = 0; i<= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}