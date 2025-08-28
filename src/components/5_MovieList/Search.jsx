import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Container, Card, Img, Text } from './MovieList'
import { IMG_PATH, getGenreListMovie, getGenreName } from './api'

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`
const Input = styled.input`
  width: 500px;
  height: 40px;
`
const H3 = styled.h3`
  margin-bottom: 20px;
`

function Search() {
  return (
    <div>Search</div>
  )
}

export default Search