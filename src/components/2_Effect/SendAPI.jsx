import React, { useState } from 'react'

function SendAPI() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

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