import "@testing-library/jest-dom";
import axios from "axios";
import User from "./User";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getData", () => {
  let response: any;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  test("user renders", async () => {
    mockedAxios.get.mockReturnValue(response);
    render(<User />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(mockedAxios.get).toBeCalledTimes(1);
    screen.debug();
  });

  test("test redirect to details page", async () => {
    mockedAxios.get.mockReturnValue(response);
    renderWithRouter(<User />);
    const users = await screen.findAllByTestId("user-item");
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {});
});
