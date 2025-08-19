import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    text-align: center;
`
const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

function Score({ firstName, score: {math, english, history} }) {
  return (
    <div>Score</div>
  )
}

export default Score