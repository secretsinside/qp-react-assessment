import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { TodoItem } from "../interfaces/TodoItem";

const items: TodoItem[] = [];
const MAX_TODO_ALLOWED: number = 1_000_000_000;

const TodoSlice: Slice = createSlice({
    name: 'todoSlice',
    initialState: {
        items
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItem>) => {
            let id: Set<number> = new Set();
            state.items.forEach((item: TodoItem) => id.add(item.id));
            let newId: number = parseInt((Math.random()*MAX_TODO_ALLOWED).toString());
            while(id.has(newId)) newId = Math.random()*MAX_TODO_ALLOWED;
            action.payload.id = newId;
            state.items.push(action.payload);
            return state;
        },
        markDone: (state, action: PayloadAction<TodoItem>) => {
            const todoItem: TodoItem = action.payload;
            state.items = state.items.map((item: TodoItem) => {
                if(item.id === todoItem.id) {
                    item.completed = true;
                }
                return item;
            })
            return state;
        },
        markUndone: (state, action: PayloadAction<TodoItem>) => {
            const todoItem: TodoItem = action.payload;
            state.items = state.items.map((item: TodoItem) => {
                if(item.id === todoItem.id) {
                    item.completed = false;
                }
                return item;
            })
            return state;
        }
    }
});


export const {addTodo, markDone, markUndone} = TodoSlice.actions;
export default TodoSlice.reducer;