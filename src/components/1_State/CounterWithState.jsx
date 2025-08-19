import React, { useState } from 'react'

function CounterWithState() {
    console.log("[렌더링] CounterWithState")
    const [count, setCount] = useState(0); // count의 선언
    const [object1, setObject1] = useState({}); // 객체의 상태관리
    const [str, setStr] = useState(""); // 문자열의 상태관리
    const [array1, setArray1] = useState([]); // 배열의 상태관리

    function increase() {
        setCount(count + 1);
    }
  return (
    <>
        <h2>CounterWithState (상태관리 사용)</h2>
        <p> Count: {count}</p>
        <button onClick={()=>increase()}> + </button>
    </>
  )
}

export default CounterWithState