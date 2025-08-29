import React from 'react'
import { useEffect } from 'react'
import { useTodoStore } from './todoStore'

function TodoList() {
  const {todos, loading, addTodo, toggleTodo, completedCount, fetchTodos } = useTodoStore();

  useEffect(()=>{
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
        <h1>Todo List</h1>
        {loading && <p>로딩 중...</p>}
        <button onClick={()=>addTodo("New Todo")}>추가하기</button>
        <p>완료된 todo 수: {completedCount()}</p>
        <ul>
            {
                todos.map((t)=>(
                    <li key={t.id} style={{color: t.done ? "blue" : "black"}}>{t.title}
                        <button onClick={()=> toggleTodo(t.id)}>변경</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList