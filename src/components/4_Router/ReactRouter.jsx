import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import styled from 'styled-components'
import Button from '../3_Props/Button'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Menu = styled.div`
  display: flex;
  gap: 50px;
`
const Body = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`

function ReactRouter() {
  return (
    <>    
    <div>ReactRouter</div>
    <BrowserRouter>
      <Menu>

      </Menu>
      <Body>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Body>
    </BrowserRouter>
    </>
  )
}

export default ReactRouter