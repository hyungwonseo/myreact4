import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Container, Card, Img, Text } from './MovieList'
import { IMG_PATH, getGenreListMovie, getGenreName, searchMoviesByKeyword } from './api'
import { useNavigate, useLocation } from 'react-router-dom'
import noExist from './img/no_exist.jpg'

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
  const location = useLocation();
  const urlKeyword = new URLSearchParams(location.search).get("keyword");

  useEffect(()=>{
    // search 페이지의 검색키워드가 있으면 searchMovies()를 호출
    // 없으면 상태 초기화
    if (urlKeyword) {
      searchMovies(urlKeyword);
    }else {
      setData(null);
      setLoading(true);
    }
  }, [urlKeyword]); 
  // useEffect의 의존성배열에는 상태관리변수만 넣지는 않는다.
  // 일반 변수도 추가할 수 있음!!!

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
        <Input value={inputKeyword} 
               onChange={(e)=>setInputKeyword(e.target.value)}
               placeholder='검색어를 입력해주세요' />
        <Button onClick={()=>{
            inputKeyword ? navigate(`/search?keyword=${inputKeyword}`)
            : alert("검색어를 입력해주세요")
          }}>
          검색
        </Button>
      </SearchBox>
      <H3>{urlKeyword ? `<${urlKeyword}>로 검색한 결과 리스트` : 'Search'}</H3>
      <Container>
        {
          loading ? "대기중..."
          : (
            data.results?.length > 0 ?
            data.results.map(movie => (
            <Card key={movie.id} onClick={()=>navigate(`/movie/${movie.id}`)}>
              <Img src={
                movie.poster_path ? IMG_PATH + movie.poster_path
                : noExist}>
              </Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenreName(genreList, movie.genre_ids)}</Text>
              <hr />
              <Text>{movie.overview}</Text>
            </Card>            
          ))
          : <p>검색한 결과가 없습니다.</p>)
        }
      </Container>
    </div>
  )
}

export default Search