import React from 'react'
import { useUserStore } from './Login'

function MyPage() {
  const {user, logout} = useUserStore();
  return (
    <>
    <div>MyPage</div>
    <p>{user ? user.email : "로그인해주세요"}</p>
    {
      user && <button onClick={()=>logout()}>로그아웃</button>
    }    
    </>
  )
}

export default MyPage