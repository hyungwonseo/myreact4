import React, { useEffect, useState } from 'react'

function Example3() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        sendAPI().then((response) => {
            console.log("서버로부터 응답 도착");
            setData(response);
            setLoading(false);
        })
    }, []);

  return (
    <div>
        {
            loading ? <p>로딩 중...</p> : <p>데이터 : {data.title}</p>
        }
    </div>
  )
}

const sendAPI = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({title: "게시판제목"});
        }, 3000);
    });
};

export default Example3