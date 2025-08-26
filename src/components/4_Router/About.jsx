import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const { id } = useParams();
  return (
    <>
    <div>About</div>
    <p>{id}</p>
    </>
  )
}

export default About