import React, { useState } from 'react'
import Button from "../3_Props/Button"

function BasicRouter() {
  const [view, setView] = useState("home");
  return (
    <>
    <h1>BasicRouter</h1>
    <Menu>
      <Button bgcolor='dodgerblue'
              title='HOME'
              func={()=>setView("home")} />
    </Menu>
    </>
  )
}

export default BasicRouter