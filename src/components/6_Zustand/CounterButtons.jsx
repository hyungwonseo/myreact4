import React from 'react'
import { useCounterStore } from './CounterWrapper'

function CounterButtons() {
  const {increase, decrease} = useCounterStore();  
  console.log("CounterButtons 렌더링됨");
  return (
    <>
    <div>CounterButtons</div>
    <button onClick={()=>increase()}>증가</button>
    <button onClick={()=>decrease()}>감소</button>
    </>
  )
}

export default CounterButtons