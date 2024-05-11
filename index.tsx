import React from "react";
import { Root, createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import todoStore from "./src/store/TodoStore";
import AppRootFC from "./src/components/AppRoot.component";

const root: Root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <>
        <Provider store={todoStore}>
            <AppRootFC/>
        </Provider>
    </>
)