import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("counter test", () => {
  test("test router", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementBtn = screen.getByTestId("inc-btn");
    const decrementBtn = screen.getByTestId("dec-btn");
    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("1");
    await userEvent.click(decrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
  });
});
