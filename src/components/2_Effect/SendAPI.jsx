import React, { useEffect, useState } from 'react'
import axios from 'axios';

function SendAPI() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchTodo() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/3");
            return response.data;
        }
        catch (error) {
            console.log("API 호출 실패", error);
            return null;
        }
    }

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/3")
        .then((response)=>{
            setData(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log("데이터 가져오기 실패: ", error);
        });
    }, []);

  return (
    <div>
        {
            loading ? <p>로딩 중...</p> :
            <>
                <p> 타이틀 : {data.title}</p>
                <p> ID : {data.id}</p>
                <p> User ID : {data.userId}</p>
                <p> 완료여부 : {data.completed ? "TRUE" : "FALSE"}</p>
            </>
        }
    </div>
  )
}

export default SendAPI