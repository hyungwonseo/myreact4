import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    width: 300px;
    background-color: dodgerblue;
    box-shadow: 1px 2px 5px gray;
    padding: 10px;
    margin-bottom: 20px;
`

const Bold = styled.p`
    font-weight: 700;
    font-size: 2rem;
    color: white;
`

// 이름, 직업, 국적을 적은 네임카드 컴포넌트
function Avatar({ person: {name, job, country} }) {
  return (
    <Container>
        <Bold>{name}</Bold>
        <p>{job}</p>
        <p>{country}</p>
    </Container>
  )
}

export default Avatar