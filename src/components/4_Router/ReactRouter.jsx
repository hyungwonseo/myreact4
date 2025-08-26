import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
    <h1>ReactRouter</h1>
    <BrowserRouter>
      <Menu>
        <Link to='/home'><Button variant="primary">HOME</Button></Link>
        <Link to='/about'><button type='button' className='btn btn-warning'>ABOUT</button></Link>
        <Link to='/contact'><Button variant="success">CONTACT</Button></Link>
      </Menu>
      <Body>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/index.html' element={<Home/>}></Route>
          <Route path='/index' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}>
            <Route path=":id" element={<About />} />
          </Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Body>
    </BrowserRouter>
    </>
  )
}

export default ReactRouter