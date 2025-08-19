import React, { useState } from 'react'

function CounterWithState() {
    const [count, setCount] = useState(0); // count의 선언
    function increase() {

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