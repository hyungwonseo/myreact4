import React from 'react'
import { useCounterStore } from './CounterWrapper'

function CounterButtons() {
  // 방법1.
  //const {increase, decrease} = useCounterStore();
  // 방법2.
  // const {increase, decrease} = useCounterStore.getState();
  const increase = useCounterStore.getState().increase;
  const decrease = useCounterStore.getState().decrease;
  // 요약: 방법1은 계속 렌더링발생. 방법2는 렌더링 발생안함.
  // 방법1은 increase를 호출할 때 지속적으로 zustand의 set함수가 새로운 함수를 저장하는것으로 인식함
  // 방법2는 상태를 변경시키는 set과 연동하지 않는 방법으로 함수 호출(상태를 구독하지 않는다고 표현)
  
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