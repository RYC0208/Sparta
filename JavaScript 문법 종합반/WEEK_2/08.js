//Map
// JS => 객체, 배열 : 많고, 다양하고, 복잡한 프로그램
// 그럼에도, 현실세계에 반영하기에는 어려움
// 때문에 Map, Set 과 같은 추가적인 자료구조가 등장

// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다 빠르고 효율적

//(1) Map
// - Key / value
// - Key에 어떤 데이터 타입 (유형)도 다 들어올 수 있다.
// - Map은 키가 정령된 순서로 저장되기 때문이다.
// - 기능
//  >검색, 삭제, 제거, 여부 확인

const myMap = new Map();
myMap.set('key', 'value');

myMap.get('key');

// 반복 ... !! -> method : keys, values, entries
// iterator 개념
// for -> of 데이터를 순회하게끔 처리

