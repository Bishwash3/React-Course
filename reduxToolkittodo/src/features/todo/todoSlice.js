import { createSlice, nanoid } from "@reduxjs/toolkit"
import { act } from "react"

const initialState = {
    todos: [{id: 1, text: "Hellow world"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.find( (todo) => todo.id == id);
            if(todo.id == id){
                todo.text = text
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer