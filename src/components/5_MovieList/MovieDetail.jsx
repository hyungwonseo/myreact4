import React, { useEffect, useState } from 'react'
import { getMovieCreditById, getMovieDetailById, IMG_PATH } from './api';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  color: dodgerblue;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  margin-top: 20px;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
  margin-top: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  color: dodgerblue;
`;

function MovieDetail() {
  const [data, setData] = useState(null);
  const [credit, setCredit] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(()=>{
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      }else {
        console.log("영화의 상세정보가 없습니다");
        return;
      }
      response = await getMovieCreditById(id);
      if (response.data) {
        console.log(response.data);
        setCredit(response.data);
      }else {
        console.log("영화의 크레딧정보가 없습니다");
        return;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div>
      <Container>
        {
          loading ? "로딩중..."
          : (
            <>
            <Header>
              <h1>{data.title}</h1>
            </Header>
            <Img src={IMG_PATH + data.backdrop_path}></Img>
            <Content>
              <p>타이틀 : {data.title}</p>
              <p>장르 : {data.genres.map(g=>g.name).filter(name=>name).join(", ")}</p>
              <p>개봉일 : {data.release_date}</p>
              <p>상영시간 : {data.runtime + '분'}</p>
              <p>감독 : {credit.crew.filter(c=>c.job === "Director")
                                    .map(c=>c.name)
                                    .filter(name=>name)
                                    .join(", ")
                }</p>
              <p>배우 : {credit.cast.slice(0,10)
                                   .map(c=>c.name)
                                   .filter(name=>name)
                                   .join(", ")                
                }</p>
              <p>{data.overview}</p>
            </Content>
            <Bottom></Bottom>
            </>
          )
        }
      </Container>
    </div>
  )
}

export default MovieDetail