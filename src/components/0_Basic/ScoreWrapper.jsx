import React from 'react'
import styled from 'styled-components'
import Score from './Score'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function ScoreWrapper() {
  const score = {
    math: 100,
    english: 75,
    history: 80,
  };  
  return (
    <Container>
        <Score firstName="Steve" score={score}>
            <div>나는 스코어 컴포넌트의 자식</div>
        </Score>
    </Container>
  )
}

export default ScoreWrapper