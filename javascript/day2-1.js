function checkAge(age) { 
    // 여기에 if-else 문을 작성하세요 } 
    // 예시 출력 checkAge(20); 
    // 출력: "Access granted" checkAge(16); 
    // 출력: "Access denied"
    if(age >= 18){
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}
checkAge(17);


function checkEvenOdd(num) {
  if(num%2 === 0){
    console.log("짝수입니다.")
  }else{
    console.log("홀수입니다.")
  }
}
// 예시 출력
checkEvenOdd(4); // 출력: "짝수입니다."
checkEvenOdd(0); // 출력: "홀수입니다."

function assignGrade(score) {
    if(score >= 90){
        console.log("A입니다.")
    } else if (score >= 80){
        console.log("B입니다.")
    } else if (score >= 70){
        console.log("C입니다.")
    } else if (score >= 60){
        console.log("D입니다.")
    } else {
        console.log("F입니다.")
    }

    return;
}

  assignGrade(95); // 출력: "A"
  assignGrade(85); // 출력: "B"
  assignGrade(75); // 출력: "C"
  assignGrade(65); // 출력: "D"
  assignGrade(50); // 출력: "F"

  for(let i= 1; i<= 9; i++){
    console.log(i);
  }