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
    fetchTodos:
}))