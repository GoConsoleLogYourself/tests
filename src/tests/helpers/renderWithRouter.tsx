import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";
import { ReactNode } from "react";
import { render } from "@testing-library/react";

export const renderWithRouter = (
  component: ReactNode,
  initialRouter: string = "/"
) => {
  return render(
    <MemoryRouter initialEntries={[initialRouter]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
