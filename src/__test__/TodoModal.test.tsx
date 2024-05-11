import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import TodoModalFC from "../components/TodoModal.component"
import { Provider } from "react-redux"
import todoStore from "../store/TodoStore";
import "@testing-library/jest-dom";

const CLOSE_MODAL = "close modal requested";

describe("Should test add-todo modal functionality", () => {
    let prompt = "";
    beforeEach(async () => {
        await act(async () => {
            render(
                <Provider store={todoStore}>
                    <TodoModalFC toggleTodoModal={() => {prompt = CLOSE_MODAL}}/>
                </Provider>
            )
        })
    })

    it("should check if modal has title, description, add and cancel buttons", async () => {

        const titleField = screen.getByTestId("add-todo-modal-title");
        const descriptionField = screen.getByTestId("add-todo-modal-description");
        const cancelBtn = screen.getByTestId("add-todo-modal-cancel-btn");
        const addBtn = screen.getByTestId("add-todo-modal-add-btn");

        expect(titleField).toBeInTheDocument();
        expect(descriptionField).toBeInTheDocument();
        expect(cancelBtn).toBeInTheDocument();
        expect(addBtn).toBeInTheDocument();
    })

    it("should show error if add button is clicked without populating fields", () => {

        const addBtn = screen.getByTestId("add-todo-modal-add-btn");
        fireEvent.click(addBtn);
        const errorMsg = screen.getByTestId("add-todo-modal-error-msg").innerHTML;
        expect(errorMsg.length).toBeGreaterThan(0);
    })

    it("should check if cancel button is working correctly", () => {
        const cancelBtn = screen.getByTestId("add-todo-modal-cancel-btn");
        fireEvent.click(cancelBtn);
        expect(prompt).toEqual(CLOSE_MODAL);
    })

    
})
