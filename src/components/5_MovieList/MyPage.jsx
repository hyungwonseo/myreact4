import React from 'react'
import { useUserStore } from './Login'

function MyPage() {
  const {user, isLoggedIn, logout} = useUserStore();
  return (
    <>
    <div>MyPage</div>
    <p>{isLoggedIn ? user.email : "로그인해주세요"}</p>
    {
      isLoggedIn && <button onClick={()=>logout()}>로그아웃</button>
    }    
    </>
  )
}

export default MyPage