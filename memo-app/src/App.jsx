/*
import React, { useCallback, useState } from 'react'
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

const App = () => {
  const [count, setCount] = useState(0);
  console.log("App 컴포넌트가 렌더링 됨");

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  }

  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  }

  const initCount = useCallback(() => {
    console.log(`[COUNT 변경] ${count}에서 0으로 변경되었습니다.`)
    setCount(0);
  }, [count]);
  return (
    <div>
      <h3>카운트 예제임다</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={{
        display: "flex",
        marginTop: "10px",
      }}>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </div>
  )
}

export default App
*/
import React from "react";
import HeavyComponent from "./components/HeavyComponent";
const App = () => {
  return (
    <div>
      <h1>useMemo</h1>
      <nav
        style={{
          backgroundColor: "yellow",
          marginBottom: "30px",
        }}
      >
        네비게이션 바
      </nav>
      <HeavyComponent />
      <footer style={{
        backgroundColor: "Green",
        marginTop: "30px",
      }}>푸터 영역이에요.</footer>
    </div>
  );
};

export default App;
