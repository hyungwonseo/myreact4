import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import ItemList from './ItemList'
import Button from './Button'

const Container = styled.div`
    display: flex;
`
const SideMenu = styled.div`
    width: 200px;
    height: 100vh;
`
const Content = styled.div`
    padding-left: 50px;
`

function Home() {
  return (
    <Container>
        <SideMenu>
            <Menu />
        </SideMenu>
        <Content>
            <Button bgcolor="dodgerblue" title="버튼1"
                func={()=>console.log("버튼1이 클릭됨")} />
            <Button bgcolor="lightgreen" title="버튼2"
                func={()=>console.log("버튼2이 클릭됨")} />
            <Button bgcolor="teal" title="버튼3"
                func={()=>console.log("버튼3이 클릭됨")} />
            <br />
            <br />
            <ItemList />
        </Content>
    </Container>
  )
}

export default Home