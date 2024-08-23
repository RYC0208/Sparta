import React from 'react'
import {useLocation, useParams, useSearchParams} from "react-router-dom"

const Detail = () => {
    const location = useLocation();
    const [쿼리파람, set쿼리파람] = useSearchParams();
    const 나이 = 쿼리파람.get("age");

    const any  = useParams();
    const 이름 = any.userName;

    console.log(나이);
  return (
    <div>
        <h3>{이름}님 안녕하세요.</h3>
        <button onClick={function () {
            set쿼리파람("age=50");
        }}></button>
    </div>
  )
}

export default Detail
