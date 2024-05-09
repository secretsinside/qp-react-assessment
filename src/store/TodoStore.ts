import { Store, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";

const TodoStore: Store = configureStore({
    reducer: {
        todoSlice
    }
    
})

export default TodoStore;

export type RootState = ReturnType<typeof TodoStore.getState>;

export type AppDispatch = typeof TodoStore.dispatch;