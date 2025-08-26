import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { categories } from './api';

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