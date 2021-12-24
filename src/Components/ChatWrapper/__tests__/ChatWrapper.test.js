import { render, screen } from "@testing-library/react";
import { ChatWrapper } from "../ChatWrapper";

test("renders learn react link", () => {
  render(<ChatWrapper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
