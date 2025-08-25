import React, { useState } from 'react'
import Button from "../3_Props/Button"
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Contact from './Contact';
const Menu = styled.div``
const Body = styled.div``

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
      <Button bgcolor='dodgerblue' title='HOME' func={()=>setView("home")} />
      <Button bgcolor='dodgerblue' title='ABOUT' func={()=>setView("about")} />
      <Button bgcolor='dodgerblue' title='CONTACT' func={()=>setView("contact")} />
    </Menu>
    <Body>
      {renderView()}
    </Body>
    </>
  )
}

export default BasicRouter