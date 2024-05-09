import { FC } from "react";
import { TodoItem } from "../interfaces/TodoItem";
import { useAppSelector } from "../hooks";
import TodoItemFC from "./TodoItem.component";

interface TodoFCProps {
    openAddTodoDialog: () => void
}

const TodoFC: FC<TodoFCProps> = ({openAddTodoDialog}) => {
    const todoItems: TodoItem[] = useAppSelector(state => state.todoSlice.items);

    return (
        <>
            <div className="text-2xl bg-red-200 text-center font-bold h-24">
                <p className="my-auto">My Todo</p>
            </div>
            <div className="text-center mt-4">
                <button className="bg-black text-white p-4 rounded-lg font-bold" onClick={openAddTodoDialog}>Add</button>
            </div>
                

            {
                todoItems.length > 0 ?
                (
                    <div className="w-6/12 m-auto">
                        {todoItems.map((item: TodoItem) => (
                            <TodoItemFC key={item.id + item.completed.toString()} item={item}/>
                        ))}
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