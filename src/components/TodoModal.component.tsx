import { FC, useState } from "react";
import { useAppDispatch } from "../hooks";
import { Dispatch } from "@reduxjs/toolkit";
import { TodoItem } from "../interfaces/TodoItem";
import { addTodo } from "../store/TodoSlice";

interface TodoModalProps {
    toggleTodoModal: () => void,
}

const TodoModalFC: FC<TodoModalProps> = ({toggleTodoModal}) => {
    const dispatch: Dispatch = useAppDispatch();

    const [showError, toggleShowError] = useState<boolean>(false);

    const [todoItem, setTodoItem] = useState<TodoItem>({
        id: 12,
        title: "",
        description: "",
        completed: false
    });


    function isTodoItemValid(todoItem: TodoItem): boolean {
        if(todoItem.title.length > 0 && todoItem.description.length > 0) return true;
        return false;
    }

    function addTodoList() {
        if(isTodoItemValid(todoItem)) {
            dispatch(addTodo(todoItem));
            toggleShowError(false);
            toggleTodoModal();
        } else {
            toggleShowError(true);
        }
    }

    return (
        <div className="absolute w-full h-screen top-0 left-0 bg-gray-500 bg-opacity-50 flex">
            <div className="w-3/12" onClick={toggleTodoModal}>
            </div>
            <div className="w-6/12 mx-2 my-auto border-x border-y flex-column p-4 bg-white rounded-lg">
                <div className="my-5">
                    <input 
                        className="outline-none border-x border-y text-3xl w-full rounded-lg p-3" 
                        type="text" 
                        placeholder="Title" 
                        value={todoItem.title}
                        onChange={(e) => setTodoItem({...todoItem, title: e.target.value})}/>
                </div>
                <div className="my-3">
                    <textarea 
                        className="outline-none border-x border-y rounded-lg resize-none w-full p-3 h-44" 
                        placeholder="Description"
                        value={todoItem.description}
                        onChange={(e) => setTodoItem({...todoItem, description: e.target.value})}/>
                </div>
                <div className="text-red-500 px-4 text-sm">
                    { showError ? "Title and descriptions are required fields" : ""}
                </div>
                <div className="text-right">
                    <button className="py-2 px-8 mx-2 rounded-lg outline-none font-semibold text-red-500" onClick={toggleTodoModal}>Cancel</button>
                    <button className="bg-black text-white py-2 px-8 rounded-lg font-semibold" onClick={addTodoList}>Add</button>
                </div>
            </div>
            <div className="w-3/12" onClick={toggleTodoModal}>
            </div>
        </div>
    )
}

export default TodoModalFC;