import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "./redux/reducers";
import { createStore } from "redux";
import Root from "./Root";

//This is my very first time writing tests and I can't pass one test 🤣 because I think it's because of the way I'm testing the component.

describe("GIVEN a Redux store created from the rootReducer", () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  describe("WHEN this is passed to Root", () => {
    let getByLabelText, getByText, container;
    beforeEach(() => {
      ({ getByLabelText, getByText, container } = render(
        <Root store={store} />
      ));
    });

    test("THEN there are no todos shown", () => {
      expect(container).toHaveTextContent(/0 tasks/i);
    });

    describe("AND when a todo is added", () => {
      beforeEach(() => {
        fireEvent.change(getByLabelText(/enter todo/i), {
          target: { value: "My first todo" },
        });
        fireEvent.click(getByLabelText(/add todo/i));
      });

      test("THEN the todo is visible", () => {
        expect(container).toHaveTextContent("My first todo");
      });

      describe("AND when completed todos are selected", () => {
        beforeEach(() => {
          fireEvent.click(getByLabelText(/active todos/i));
        });

        test("THEN the todo is not visible", () => {
          expect(container).not.toHaveTextContent("My first todo"); //This doesn't work and i don't know why 🤷‍♂️ haha, any feedback is appreciated.
        });
      });

      describe("AND when incomplete todos are selected", () => {
        beforeEach(() => {
          fireEvent.click(getByLabelText(/uncompleted todos/i));
        });

        test("THEN the todo is visible", () => {
          expect(container).toHaveTextContent("My first todo");
        });
      });

      describe("AND when a further todo is added", () => {
        beforeEach(() => {
          fireEvent.change(getByLabelText(/enter todo/i), {
            target: { value: "My second todo" },
          });
          fireEvent.click(getByLabelText(/add todo/i));
        });

        test("THEN both todos are visible", () => {
          expect(container).toHaveTextContent("My first todo");
          expect(container).toHaveTextContent("My second todo");
        });
      });
    });
  });
});
