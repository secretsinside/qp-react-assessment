import { FC } from "react";
import { TodoItem } from "../interfaces/TodoItem";
import { Dispatch } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks";
import { markDone, markUndone } from "../store/TodoSlice";

interface TodoItemProps {
    item: TodoItem
}

const TodoItemFC: FC<TodoItemProps> = ({item}) => {
    const dispatch: Dispatch = useAppDispatch();

    function toggleItemState(): void {
        if(!item.completed) dispatch(markDone(item));
        else dispatch(markUndone(item));
    }

    return (
        <>
            <div className="flex m-2 border-x border-y rounded-md p-1 text-blue-950">
                <input type="checkbox" checked={item.completed} onChange={toggleItemState}/>
                <div className="ml-2">
                    <p className={`text-lg font-medium ` + (item.completed ? "line-through" : "")}>{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default TodoItemFC;