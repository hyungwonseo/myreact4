import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
    todos: [],
    loading: false,
    addTodo: (title) => {
        set((state) => ({
            todos: [...state.todos, {id: Date.now(), title, done: false}]
        }));
    },
    toggleTodo:
    completedCount:
    fetchTodos:
}))