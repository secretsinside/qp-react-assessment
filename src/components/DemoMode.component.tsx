import { FC } from "react";
import { TodoItem } from "../interfaces/TodoItem";
import { useAppDispatch } from "../hooks";
import { batchUpdate } from "../store/TodoSlice";

const DemoModeFC: FC = () => {

    const dispatch = useAppDispatch();

    const MAX_LIST_LENGTH: number = 1000;
    
    function generateRandomTask(): void {
        let todoList: TodoItem[] = [];
        let count = 0;
        while(count < MAX_LIST_LENGTH) {
            let item: TodoItem = {
                id: count,
                title: `Task-${count}`,
                description: `A random description for task-${count}`,
                completed: false
            };

            todoList.push(item);
            count++;
        }

        dispatch(batchUpdate(todoList));
    }

    return (
        <>
            <div className="m-2">
                
            <button className="px-4 py-2 rounded-lg font-semibold text-white bg-blue-950" onClick={generateRandomTask}>
                Demo mode
            </button>
            <p className="text-sm w-40 text-blue-950">Click here to generate 1000 todo</p>
            </div>
        </>
    )
}

export default DemoModeFC;