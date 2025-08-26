import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import MovieWrapper from "./MovieWrapper"
import MovieList from "./MovieList"
import MovieDetail from "./MovieDetail"
import Search from "./Search"
import MyPage from "./MyPage"
import Login from "./Login"
import Navbar from "./Navbar"
import Error from "./Error"
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
`;
const Menu = styled.div`
  width: 100%;
`;
const ContentBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const Footer = styled.div``;

function MovieListMain() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Section>
            <Menu>

            </Menu>
            <ContentBox>
              
            </ContentBox>
          </Section>
          <Footer></Footer>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default MovieListMain