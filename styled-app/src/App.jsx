
/*
  useContext
  컴포넌트 상태를 뛰어넘는 개념인 useContext에 대해 배움
  향후 redux를 배울 때 가장 중요하게 참조될 개념임

  (1) react context의 필요성
  우리는 일반적으로 부모 컴포넌트 -> 자식컴포넌트로 데이터를 전달해줄 때
  props를 사용했지만 부모 -> 자식 -> 그 자식 -> 그자식의 자식 이런식으로 너무 깊어지게 되면 prop drilling 현상이 일어남

  prop drilling의 문제점은
  깊이가 너무 깊어지면 prop이 어떤 컴포넌트에서 왔는지 파악이 어렵고
  어떤 컴포넌트에서 오류가 발생할 경우 추적이 힘들어 대처가 늦어짐
  
  그래서 context API에서는 특정 영역 안에서 상태를 공유하여 어디서든 해당 값에 접근하고 업데이트가 가능함

  context API의 필수 개념

  createContext: context를 생성하고
  useContext: context를 구독하고 해당 context의 현재 값을 읽고
  provider: context를 하위 컴포넌트에게 전달함

  useContext를 사용할 떄 provider에서 제공한 value가 달라지게 되면 
  useContext를 사용하고 있는 모든 컴포넌트가 리렌더링 됨

*/
import React from 'react'
import GrandFather from './components/GrandFather'
const App = () => {
  return (
    <div>
      <GrandFather />
    </div>

)
}

export default App
