import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    width : 500px;
    height : 40px;
    border: solid 1px black;
`

function MyComp() {
  // #1. 구조분해할당
  // 배열
  const colors = ["black", "white", "blue"];
  const [first, second, third] = colors;
  console.log(third);
  // 객체
  const user = {name : "Steve", age: 25};
  const {age, name} = user;
  console.log(name);

  // #2. 스프레드 연산자(...)
  const array1 = [1,2,3];
  const array2 = [4,5,6];
  const array3 = [array1, array2];
  const array4 = [...array1, ...array2];
  console.log(array3); // [ [1,2,3], [4,5,6] ]
  console.log(array4); // [1,2,3,4,5,6]
  const newArray1 = [10, ...array1];
  console.log(newArray1); // [10, 1, 2, 3] 
  const newArray2 = [...array1, 10];
  console.log(newArray2); // [1, 2, 3, 10]
  const newUser = {...user, address : "대전"};
  console.log(newUser); // {name: 'Steve', age: 25, address: '대전'}

  // #3. map, filter, find
  const numbers = [1, 2, 3];
  const mapResult = numbers.map(num => num * 2);
  console.log(mapResult); // [2, 4, 6]
  const filterResult = numbers.filter(num => num % 2 === 0);
  console.log(filterResult); // [2]
  const finalResult = numbers.filter(num => num % 2 === 0)
                             .map(num => num * 2);
  console.log(finalResult); // [4]
  const users = [
    { id: 1, name: "Kim"},
    { id: 2, name: "Lee"}
  ]
  const findResult = users.find(user => user.id === 2);
  console.log(findResult); // {id: 2, name: 'Lee'}

  // 리액트의 기본 구조 설명
  function method1(x) {
    console.log("method1 함수의 출력 : " + x);
  }
  let isLoggedIn = false;
  const itemList = [
    {id: 1, name:"사과", description: "맛있는 빨간 사과"},
    {id: 2, name:"바나나", description: "맛있는 노란 바나나"},
    {id: 3, name:"포도", description: "신선한 포도"},
  ];

  return (
    <>
      <Header>
          <p>MyComp</p>
      </Header>
      <div onClick={()=>method1("1000")}>
        여기를 클릭해주세요.
      </div>
      {isLoggedIn ? <p>당신은 로그인 상태입니다.</p>
        : <p>로그인해주세요.</p>}
      {isLoggedIn && <p>true면 보여주세요.</p>} 
      {
        itemList.map(item => 
          <p key={item.id}>{item.name} - {item.description}</p>)
      } 
      <MyCompOnly />
    </>
  )
}

function MyCompOnly() {
  return <p>나는 내부 컴포넌트</p>
}

export default MyComp