import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Container, Card, Img, Text } from './MovieList'
import { IMG_PATH, getGenreListMovie, getGenreName, searchMoviesByKeyword } from './api'
import { useNavigate } from 'react-router-dom'

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
  const [inputKeyword, setInputKeyword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [genreList, setGenreList] = useState([]);
  const navigate = useNavigate();

  async function searchMovies(keyword) {
    try {
      // 장르리스트
      let response = await getGenreListMovie();
      if (!response || typeof response == "undefined" || response.length == 0) {
        console.log("장르리스트 데이터가 없습니다.");
        return;
      }
      console.log(response);
      setGenreList(response);
      // 검색 api 요청
      response = await searchMoviesByKeyword(keyword);
      console.log(response.data);
      setData(response.data);
      setLoading(false);      
    } catch (error) {
      console.log(error);
      alert("데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div>
      <SearchBox>
        <Input />
        <Button>검색</Button>
      </SearchBox>
      <H3>검색한 결과 리스트</H3>
      <Container>
        <Card>

        </Card>
      </Container>
    </div>
  )
}

export default Search