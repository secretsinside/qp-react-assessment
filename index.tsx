import React, { FC, useState } from "react";
import { Root, createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import todoStore from "./src/store/TodoStore";
import TodoFC from "./src/components/Todo.component";
import TodoModalFC from "./src/components/TodoModal.component";


const AppRoot: FC = () => {
    const [showTodoModal, setShowTodoModal] = useState<boolean>(false);
    
    function toggleTodoModal(): void {
        console.log("Trying to open the add todo modal");
        setShowTodoModal(!showTodoModal);
    }

    return (
        <>
            {showTodoModal && <TodoModalFC toggleTodoModal={toggleTodoModal}/>}
            <TodoFC openAddTodoDialog={toggleTodoModal}/>
        </>
    )
}

const root: Root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <>
        <Provider store={todoStore}>
            <AppRoot/>
        </Provider>
    </>
)