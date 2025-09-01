import React from 'react'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { IconEmail, IconPassword } from './icons'

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(218deg 50% 91%);
`;
const Box = styled.div`
  width: 300px;
  height: auto;
  background-color: hsl(213deg 85% 97%);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
`;
const Smallbox = styled.div`
  width: 100%;
  background: hsl(0deg 0% 100%);
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-radius: 20px;
  color: hsl(0deg 0% 30%);
`;
const Icon = styled.div`
  display: flex;
  gap: 10px;
`;
const Input = styled.input`
  max-width: 85%;
  outline: none;
  border: none;
  &::placeholder {
    color: hsl(0deg 0% 0%);
    font-size: 0.9em;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 1em;
  margin-top: 10px;
  background-color: hsl(233deg 36% 38%);
  color: hsl(0 0 100);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

// 1. Zustand를 이용한 전역 상태관리 기본 사용법
// export const useUserStore = create((set) => ({
//   user : null,
//   isLoggedIn : false,
//   login : (email) => set({user : {email : email}, isLoggedIn: true}),
//   logout : () => set({user : null, isLoggedIn: false}),
// }));

// 2. Zustand를 이용하여 데이터를 로컬/세션 스토리지에 저장하는 옵션 사용법
export const useUserStore = create(
  persist(
    (set) => ({
      user : null,
      isLoggedIn : false,
      login : (email) => set({user : {email : email}, isLoggedIn: true}),
      logout : () => set({user : null, isLoggedIn: false}),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(()=>sessionStorage),
    }    
  )
)

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, login, logout} = useUserStore();
  const buttonRef = useRef(null);

  function handleSubmit() {
    if (email && password) {
      console.log("로그인: " + email + " " + password);
      login(email);
      setEmail("");
      setPassword(" ");
    }else {
      alert("이메일과 패스워드를 입력해주세요.");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      buttonRef.current.click();
    }
  }

  return (
    <div>
      <Container>
        <Box>
          <h1>LOGIN</h1>
          <br />
          <Smallbox>
            <label>Email Address</label>
            <Icon>
              <IconEmail />
              <Input type='text' value={email}
                onChange={(e)=>setEmail(e.target.value)}
                onKeyDown={(e)=>handleKeyDown(e)}
                placeholder='Username@gmail.com' />
            </Icon>
          </Smallbox>
          <Smallbox>
            <label>Password</label>
            <Icon>
              <IconPassword />
              <Input type='password' value={password} autoComplete='off'
                onChange={(e)=>setPassword(e.target.value)}
                onKeyDown={(e)=>handleKeyDown(e)}
                placeholder='. . . . . . . . . . . .' />
            </Icon>
          </Smallbox>
          <Button ref={buttonRef} onClick={()=>handleSubmit()}>로그인</Button>
        </Box>
      </Container>
    </div>
  )
}

export default Login