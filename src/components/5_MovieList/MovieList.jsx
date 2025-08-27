import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { categories } from './api';

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

  useEffect(()=>{
    getMovies(0);
  }, []);

  async function getMovies(index) {
    try {
      let response = await categories[index].func(); // 비동기함수 호출
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      alert("데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div>MovieList</div>
  )
}

export default MovieList