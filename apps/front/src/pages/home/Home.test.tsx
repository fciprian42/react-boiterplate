import React from "react";

import { renderWithTheme } from "@helpers/test-wrapper";

import Home from "@pages/home/Home";

test("renders Home page", () => {
  const { asFragment, getByText } = renderWithTheme(<Home />);
  expect(getByText("count: 0")).toBeInTheDocument();
});
