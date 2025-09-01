import React from 'react'
import { useRef } from 'react'

/* < useRef >
렌더링에 영향을 주지 않고 DOM요소나 특정 값을 직접 다룰 때 사용하는 기능
1. DOM 요소에 직접 접근 및 조작
: 특정 DOM요소에 ref를 연결하면, 마치 JS의 document.getElementById()를 사용하는 
  것처럼 해당 요소에 직접 점근하여 조작할 수 있음
2. 리렌더링을 유발하지 않는 값 저장
: 일반적인 값을 저장하는 데도 사용 가능. 이때 ref 값을 변경해도 컴포넌트가 
  다시 렌더링되지 않음
*/

function ReactRef() {
  const inputRef = useRef(null);
  const h3Ref = useRef(null);
  console.log("ReactRef 컴포넌트 렌더링");

  return (
    <div>
        <h1>React Ref</h1>
        <input ref={inputRef} />
        <button onClick={()=>inputRef.current.focus()}
            >버튼을 누르면 입력창에 포커스</button>
        <h3 ref={h3Ref}></h3>
        <button onClick={()=>h3Ref.current.textContent = "테스트"}
            >버튼을 누르면 h3태그에 텍스트 표시</button>
    </div>
  )
}

export default ReactRef