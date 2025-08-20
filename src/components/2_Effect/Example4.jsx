import React, { useEffect, useState } from 'react'

function Example4() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

  return (
    <div>
        <h2>현재 창 너비: {width}px</h2>
    </div>
  )
}

export default Example4