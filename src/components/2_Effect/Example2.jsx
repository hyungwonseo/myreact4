import React, { useState } from 'react'

function Example2() {
    const [show, setShow] = useState(true);
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show ? "숨기기" : "보이기"}
        </button>
    </div>
  )
}

export default Example2