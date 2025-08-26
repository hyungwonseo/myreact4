import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from "./NavItem"
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #1E90FF;
  position: relative;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #FF8C00;
  }
`

function Navbar() {
  return (
    <Container>
      <StyledLink to="/">
        <NavItem icon="fa-solid fa-house" name="HOME"></NavItem>
      </StyledLink>
       <StyledLink to="/movie">
        <NavItem icon="fa-solid fa-film" name="MOVIE"></NavItem>
      </StyledLink>
       <StyledLink to="/search">
        <NavItem icon="fa-solid fa-magnifying-glass" name="SEARCH"></NavItem>
      </StyledLink>
       <StyledLink to="/mypage">
        <NavItem icon="fa-solid fa-user-secret" name="MYPAGE"></NavItem>
      </StyledLink>
       <StyledLink to="/login">
        <NavItem icon="fa-solid fa-right-to-bracket" name="LOGIN"></NavItem>
      </StyledLink>
    </Container>
  )
}

export default Navbar