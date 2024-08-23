import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [무쓸모, set무쓸모] = useState(true);
    const [count, setCount] =useState(0);
    //2개의 인자
    // 첫 번째 인자 : 콜백 함수
    // 두 번째 인자 : DA(의존성 배열)
    useEffect(function() {
        console.log("컴포넌트 실행")
    }, [count]);
  return (
    <div>
      <h1>Home 입니다.</h1>
    <button onClick={function(){
        setCount(function (prev) {
            return prev + 1;
        })
    }}>
        +
    </button>
      {/* <button
        onClick={function () {
            return navigate("/gt");
        }}
      >갓탠다드 페이지로 갈게요!!</button> */}
      <button onClick={function(){
        set무쓸모(function (이전값){
        return !이전값;
        })
      }}>무쓸모</button>
    </div>
  )
}

export default Home
