import React, { useState } from 'react'

function ItemList() {
  const [items, setItems] = useState([]);
  const [newInputItem, setNewInputItem] = useState("");

  return (
    <>
        <input placeholder='물품이름을 입력해주세요'
            onChange={(e) => setNewInputItem(e.target.value)}
            value={newInputItem} />
        <button onClick={() => {
            const temp = [...items, newInputItem];
            setItems(temp);
            setNewInputItem("");
        }}>물품추가</button>
    </>
  )
}

export default ItemList