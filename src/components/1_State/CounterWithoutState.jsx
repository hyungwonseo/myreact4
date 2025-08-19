import React from 'react'

let count = 0;

function CounterWithoutState() {
    console.log("[렌더링] CounterWithoutState")
    function increase() {
        count = count + 1;
        console.log("현재 카운트: " + count);
    }
  return (
    <>
        <h2>CounterWithoutState</h2>
        <p> Count: {count}</p>
        <button onClick={()=>increase()}> + </button>
    </>
  )
}

export default CounterWithoutState