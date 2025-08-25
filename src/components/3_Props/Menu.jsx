import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Ul = styled.ul``
const Li = styled.li``
const Link = styled.a``

function Menu() {
  return (
    <Container>
        <Ul>
            <Li><Link href="#">Home</Link></Li>
            <Li><Link href="#">Content</Link></Li>
            <Li><Link href="#">About Us</Link></Li>
            <Li><Link href="#">Contact</Link></Li>
            <Li><Link href="#">Social</Link></Li>
        </Ul>
    </Container>
  )
}

export default Menu