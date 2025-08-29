import React from 'react'
import { useCounterStore } from './CounterWrapper'

function CounterDisplay() {
  const { count } = useCounterStore();
  console.log("CounterDisplay 렌더링됨");
  return (
    <>
    <div>CounterDisplay</div>
    <p>현재 값: {count}</p>
    </>
  )
}

export default CounterDisplay