import { FC, useState } from "react";
import TodoFC from "./Todo.component";
import TodoModalFC from "./TodoModal.component";

const AppRootFC: FC = () => {
    const [showTodoModal, setShowTodoModal] = useState<boolean>(false);
    
    function toggleTodoModal(): void {
        setShowTodoModal(!showTodoModal);
    }

    return (
        <>
            {showTodoModal && <TodoModalFC toggleTodoModal={toggleTodoModal}/>}
            <TodoFC openAddTodoDialog={toggleTodoModal}/>
        </>
    )
}

export default AppRootFC;