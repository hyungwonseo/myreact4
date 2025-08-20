import React, { useState, useEffect } from 'react'

/*
< useEffect를 사용하는 목적 >
1. 상태의 변화가 생길 때 해당 컴포넌트가 재호출되고 렌더링됨. 이때 컴포넌트내의 
실행코드는 무조건 다시 실행되기 때문에 각 상태에만 동작하는 코드들을 관리
2. 컴포넌트가 항상 재호출될 수 있으므로 상태의 초기화 또는 이벤트함수의 등록/해제
와 같은 1회만 호출될 필요가 있는 코드들을 관리
*/
function Example1() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("카운트가 변경될때만 렌더링: " + count);
    }, [count]); // 매개변수1은 익명함수, 2는 상태변수의 배열
    useEffect(()=>{
        console.log("text가 변경될때만 렌더링: " + text);
    }, [text]);
    useEffect(()=>{
        console.log("이 코드는 처음 마운트(=로딩)될 때만 실행됨");
    }, []); // 빈 배열의 의미는 최초 1회만 실행
    useEffect(()=>{
        console.log("[주의] 이 코드는 항상 렌더링됨");
    }); // 두번째 매개변수 없음

  return (
    <>
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}> + </button>
        </div>
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
    </>
  )
}

export default Example1