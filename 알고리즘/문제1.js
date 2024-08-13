// function checkTruthiness(questionLabel, value, userGuess) {
//     const isTruthy = Boolean(value);
//     const isCorrect = isTruthy === userGuess;
    
//     console.log(`\n%c${questionLabel}`, 'color: #4287f5; font-weight: bold;');
//     console.log(`%c값: ${value}`, 'color: #6c757d;');
//     console.log(`%c실제 결과: ${isTruthy ? 'true' : 'false'}`, 'color: #28a745;');
//     console.log(`%c당신의 답변: ${userGuess ? 'true' : 'false'}`, 'color: #ffc107;');
//     console.log(`%c정답 여부: ${isCorrect ? '정답입니다!' : '틀렸습니다!'}`, 
//                 `color: ${isCorrect ? '#28a745' : '#dc3545'}; font-weight: bold;`);
//     console.log('%c------------------------', 'color: #6c757d;');
//   }
  
//   // '답변입력' 부분에 true 또는 false를 입력해 주세요
//   checkTruthiness('1번 문제', 0, false);
//   checkTruthiness('2번 문제', 'false', true);
//   checkTruthiness('3번 문제', null, false);
//   checkTruthiness('4번 문제', ' ', true);
//   checkTruthiness('5번 문제', [], true);
//   checkTruthiness('6번 문제', {}, true);
//   checkTruthiness('7번 문제', -1, true);
//   checkTruthiness('8번 문제', '', false);
// //   checkTruthiness('9번 문제', NaN, 답변입력);
// //   checkTruthiness('10번 문제', Infinity, 답변입력);
  
// //   // 입력 예시
// //   checkTruthiness('1번 문제', 0, true);
// //   checkTruthiness('1번 문제', 0, false);

function rockPaperScissors1(a, b) { 
    if( a === b ){
        return "무승부"
    } else if (
        (a === "가위" && b === "보")||
        (a === "바위" && b === "가위")||
        (a === "보" && b === "바위")
    )return "a 승리";
    else {
        return "b 승리";
    }
    
}
function rockPaperScissors(a, b) {
    if (a === b) return '무승부';
    return ['가위-보', '바위-가위' ,'보-바위'].includes(a+'-'+b) ? 'a 승리' : 'b 승리';
}

// 9가지 경우의 수 테스트
console.log(rockPaperScissors('가위', '가위') === '무승부');
console.log(rockPaperScissors('가위', '바위') === 'b 승리');
console.log(rockPaperScissors('가위', '보') === 'a 승리');
console.log(rockPaperScissors('바위', '가위') === 'a 승리');
console.log(rockPaperScissors('바위', '바위') === '무승부');
console.log(rockPaperScissors('바위', '보') === 'b 승리');
console.log(rockPaperScissors('보', '가위') === 'b 승리');
console.log(rockPaperScissors('보', '바위') === 'a 승리');
console.log(rockPaperScissors('보', '보') === '무승부');