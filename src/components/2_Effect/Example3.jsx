import React, { useState } from 'react'

function Example3() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

  return (
    <div>
        {
            loading ? <p>로딩 중...</p> : <p>데이터 : {data.title}</p>
        }
    </div>
  )
}

export default Example3