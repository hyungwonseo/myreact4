import axios from "axios";
import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
    todos: [],
    loading: false,
    addTodo: (title) => {
        set((state) => ({
            todos: [...state.todos, {id: Date.now(), title, done: false}]
        }));
    },
    toggleTodo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? {...todo, done: !todo.done} : todo
            )
        }))
    },
    completedCount: () => {
        const todos = get().todos;
        return todos.filter(t=>t.done).length;
    },
    // 비동기 데이터를 요청하기위한 함수
    // 서버로부터 todo list를 얻어와서 상태변수인 todos에 저장함
    fetchTodos: async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
            const data = response.data;
            set({
                todos: [...get().todos, ...data.map(
                    (d) => ({id: d.id, title: d.title, done: d.completed})
                )]
            });
            set({loading: false});
        } catch (error) {
            console.log(error);
        }
    },
    // updateTodos 라는 함수가 필요함
})) 