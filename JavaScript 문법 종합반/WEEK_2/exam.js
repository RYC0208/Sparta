let strings = ["qwe", "asd", "vas"];
let n = 0;

function sortStrings (strings, n) {
    var answer = [];
    for ( var i=0; i<strings.length; i++) {
        strings[i] = strings[i][n] + strings[i]
    } // ex) car -> a + car -> acar
    strings.sort(); // a~z 순서
    for(var j=0; j<strings.length; j++){
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j]);
    }
    console.log(answer);
    return answer;
}

sortStrings(strings, n);