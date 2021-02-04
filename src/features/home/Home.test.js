import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders Hi there!", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Hi there!/i);
  expect(linkElement).toBeInTheDocument();
});
