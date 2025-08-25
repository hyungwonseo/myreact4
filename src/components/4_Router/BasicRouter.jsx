import React, { useState } from 'react'
import Button from "../3_Props/Button"
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Contact from './Contact';
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

function BasicRouter() {
  const [view, setView] = useState("home");
  function renderView() {
    switch (view) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  return (
    <>
    <h1>BasicRouter</h1>
    <Menu>
      <Button width="150" bgcolor='dodgerblue' 
              title='HOME' func={()=>setView("home")} />
      <Button width="150" bgcolor='dodgerblue' 
              title='ABOUT' func={()=>setView("about")} />
      <Button width="150" bgcolor='dodgerblue' 
              title='CONTACT' func={()=>setView("contact")} />
    </Menu>
    <Body>
      {renderView()}
    </Body>
    </>
  )
}

export default BasicRouter