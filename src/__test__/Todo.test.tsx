import { act, fireEvent, render, screen } from "@testing-library/react";
import TodoFC from "../components/Todo.component";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import todoStore from "../store/TodoStore";
import AppRootFC from "../components/AppRoot.component";

describe("Should check if landing page is loading",  () => {
    beforeEach(async () => {
        await act(async () => 
            render(
                <Provider store={todoStore}>
                    <AppRootFC/>
                </Provider>
            )
        );
    })
    it("should check for page title", () => {
        const title  = screen.getByTestId("app-title");
        expect(title).toBeInTheDocument();
    })

    it("should check for add to do button", () => {
        const addTodoBtn = screen.getByTestId("add-todo-btn");
        expect(addTodoBtn).toBeInTheDocument();
    })

    it("should check if no todo is present should show no-todo banner", () => {
        const noTodoBanner = screen.queryByTestId("no-todo-banner");
        const todoListContainer = screen.queryByTestId("todo-list-container");
        if(noTodoBanner) expect(todoListContainer).not.toBeInTheDocument();
        else expect(noTodoBanner).not.toBeInTheDocument();
    })

    it("should open add todo dialog when add button is clicked", () => {

        const addTodoBtn = screen.getByTestId("add-todo-btn");
        fireEvent.click(addTodoBtn);
        const addTodoModal = screen.getByTestId("add-todo-modal");
        expect(addTodoModal).toBeInTheDocument();
    })

    it("should add todo and remove no-todo banner", () => {
        const addTodoBtn = screen.getByTestId("add-todo-btn");
        fireEvent.click(addTodoBtn);
        
        const titleField = screen.getByTestId("add-todo-modal-title");
        const descriptionField = screen.getByTestId("add-todo-modal-description");
        const addTodoModalBtn = screen.getByTestId("add-todo-modal-add-btn");
        fireEvent.change(titleField, {target:{value: "Test-Title"}});
        fireEvent.change(descriptionField, {target: {value: "Test-Description"}});
        fireEvent.click(addTodoModalBtn);

        const todoModal = screen.queryByTestId("add-todo-modal");
        const noTodoBanner = screen.queryByTestId("no-todo-banner");
        const todoListContainer = screen.queryByTestId("todo-list-container");
        expect(todoModal).toBeNull();
        expect(noTodoBanner).toBeNull();
        expect(todoListContainer).toBeInTheDocument();
    })


})
