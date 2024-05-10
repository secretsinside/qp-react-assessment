import { FC } from "react";
import { TodoItem } from "../interfaces/TodoItem";
import { useAppSelector } from "../hooks";
import TodoListFC from "./TodoList.component";
import DemoModeFC from "./DemoMode.component";

interface TodoFCProps {
    openAddTodoDialog: () => void
}

const TodoFC: FC<TodoFCProps> = ({openAddTodoDialog}) => {
    const todoItems: TodoItem[] = useAppSelector(state => state.todoSlice.items);

    return (
        <>
            <div className="text-2xl bg-red-200 text-center font-bold h-24 sticky top-0 flex justify-between">
                <p className="mx-2 my-auto text-3xl">My Todo</p>
                <DemoModeFC/>
            </div>
            <div className="text-center mt-4">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-bold" onClick={openAddTodoDialog}>Add</button>
            </div>
                

            {
                todoItems.length > 0 ?
                (
                    <div className="w-6/12 m-auto">
                        <TodoListFC todoItems={todoItems}/>
                    </div>
                    
                )
                :
                (
                    <div className="text-center">
                        <p className="font-bold text-4xl">Nothing here at moment</p>
                        <p className="text-xl">Go ahead, write something you wanna do later.</p>
                    </div>
                )
            }
        </>
    )
}

export default TodoFC;