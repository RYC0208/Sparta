
// let s = "pPoooyY";
// solution(s);


// function solution(s){
//     var answer = true;
//     var toLowerCaseS = s.toLowerCase(); 
//     let p = 0;
//     let y = 0;

//     for(let i = 0; i <= s.length; i++){
//         if(toLowerCaseS.charAt(i) === 'p'){
//             p++;
//         }else if (toLowerCaseS.charAt(i) === 'y'){
//             y++;
//         }
//     }

//     if(p === y || p + y === 0){
//         return answer;
//     } else {
//         return answer = false;
//     }
// }

let absolutes = [4,7,12];
let signs = [true,false,true];

solution(absolutes, signs);
function solution(absolutes, signs) {
    
    let integer = 0; 
    let negative = 0;
    
    var answer = 0;
    
    console.log(absolutes.length);
    for(let i = 0; i <absolutes.length; i++){
        if(signs[i] === true){
            integer += absolutes[i];
        } else {
            negative -= absolutes[i];
            console.log(negative);
            console.log(absolutes[i]);
        }
    }
    
    return answer = integer + negative;
}