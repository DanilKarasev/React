import { render, screen } from "@testing-library/react";
import { Home } from "../Home";
import { Provider } from "react-redux";
import { store } from "../../../Store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
