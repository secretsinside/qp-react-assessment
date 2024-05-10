import { FC, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { TodoItem } from "../interfaces/TodoItem";
import TodoItemFC from "./TodoItem.component";

const LENGTH = 20;

interface TodoListProps {
    todoItems: TodoItem[]
}

const TodoListFC: FC<TodoListProps> = ({todoItems}) => {
    const [loadedItems, setLoadedItems] = useState(LENGTH);

    const loadFun = (loadedLength: number) => {
        setLoadedItems((length) => length + loadedLength);
    }

    const currentData: TodoItem[] = todoItems.slice(0, loadedItems);
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFun}
            threshold={LENGTH+10}
            hasMore={todoItems.length > currentData.length}>
                {
                    currentData.map((item: TodoItem) => (
                        <TodoItemFC key={item.id + item.completed.toString()} item={item}/>
                    ))
                }
        </InfiniteScroll>
    )
}

export default TodoListFC;