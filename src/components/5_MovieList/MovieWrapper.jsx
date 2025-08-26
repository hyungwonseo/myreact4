import React from 'react'
import { Outlet } from 'react-router-dom'

function MovieWrapper() {
  return (
    <div>
      {/* <h3>Wrapper</h3> */}
      <Outlet />
    </div>
  )
}

export default MovieWrapper