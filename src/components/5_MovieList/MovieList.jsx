import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { categories, getGenreListMovie, getGenreName, IMG_PATH } from './api';
import { useNavigate } from 'react-router-dom';

const Tab = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
`;
export const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: #1E90FF;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #FF8C00;
  }
  &.selected {
    background-color: #32cd32;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
export const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;

function MovieList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);
  const [genreList, setGenreList] = useState([]);
  const navigate = useNavigate(); // URL 변경함수

  useEffect(()=>{
    getMovies(0);
  }, []);

  async function getMovies(index) {
    try {
      let response = await getGenreListMovie();
      if (!response || response.length === 0) { // 200OK를 받았는데 내용이 비었을때
        console.log("장르리스트 데이터가 없습니다");
        return;
      }
      console.log(response);
      setGenreList(response);
      response = await categories[index].func(); // 비동기함수 호출
      console.log(response.data);
      setSelectedCat(index);
      setData(response.data);
      setLoading(false);      
    }
    catch (error) {
      console.log(error);
      alert("데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div>
      <h1>Movie List</h1>
      <Tab>
        {
          categories.map((category, i) => (
            <Button key={i} onClick={()=>getMovies(i)} className={i == selectedCat ? "selected" : ""}>
              {category.category}
            </Button>
          ))
        }
      </Tab>
      <Container>
        {
          loading ? (
            <p>로딩중...</p>
          ) : (
            data.results.map(movie => 
              <Card key={movie.id} onClick={()=> navigate(`${movie.id}`)}>
                <Img src={IMG_PATH + movie.poster_path}></Img>
                <Text>타이틀 : {movie.title}</Text>
                <Text>장르 : {getGenreName(genreList, movie.genre_ids)}</Text>
                <hr />
                <Text>{movie.overview}</Text>
              </Card>
          ))
        }
      </Container>
    </div>
  )
}

export default MovieList