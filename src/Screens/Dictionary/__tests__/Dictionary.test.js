import { render, screen } from "@testing-library/react";
import { Dictionary } from "../Dictionary";
import { Provider } from "react-redux";
import { store } from "../../../Store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Dictionary />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
