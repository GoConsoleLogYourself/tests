import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("TEST APP", () => {
  test("renders", async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/Hello world2/i);
    // expect(helloWorldElem).toBeNull()
    screen.debug();
    const helloWorldElem = await screen.findByText(/Data/i);
    expect(helloWorldElem).toBeInTheDocument();
    screen.debug();
  });

  test("CLICK EVENT", () => {
    render(<App />);
    const btn = screen.getByTestId("button");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("input-value")).toContainHTML("");
    fireEvent.input(input, {
      target: { value: "1234" },
    });
    // userEvent.type(input, "1234");
    expect(screen.queryByTestId("input-value")).toContainHTML("1234");
  });
});
