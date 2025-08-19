import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    width: 150px;
    height: 50px;
`
const Box = styled.section`
    width: 400px;
    height: 400px;
    padding: 50px;
    background-color: dodgerblue;
    color: white;
    border-radius: 5px;   
    & input {
        width: 300px;
        height: 30px;
    } 
    & .nameTag {
        font-size: 1.5rem;
    }
`

function NameForm() {
    console.log("[렌더링] NameForm");
    const [inputColor, setInputColor] = useState("dodgerblue");
    const [colorName, setColorName] = useState("");
    function changeColor() {
        setColorName(inputColor);
    }
  return (
    <Container>
        <Box>
            <h2>컬러 입력</h2>
            <input type="text" value={inputColor} 
                onChange={(e)=>setInputColor(e.target.value)}
                placeholder='컬러이름을 입력해주세요' />
            <p className='nameTag'>입력한 컬러는 : {colorName}</p>
            <Button onClick={()=>changeColor()}>버튼을 누르면 컬러가 바뀝니다</Button>
        </Box>
    </Container>
  )
}

export default NameForm