import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100px;
    height: 40px;
    padding: 10px 20px;
    font-size: 1.3rem;
    line-height: 8px;
    color: white;
    background-color: ${props=>props.$bgcolor};
    border-radius: 10px;
`

// 구조분해할당의 default값 설정 방법 (bgcolor="gray"...)
function Button({ bgcolor="gray", title="Click", func=()=>{} }) {
  return (
    <StyledButton $bgcolor={bgcolor} onClick={func}>
        {title}
    </StyledButton>
  )
}

export default Button