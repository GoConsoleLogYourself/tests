import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";

describe("getData", () => {
  test("renders react links", async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    const usersLink = screen.getByTestId("users-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
    await userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
