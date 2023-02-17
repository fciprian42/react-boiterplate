import "jest-styled-components";

import React from "react";

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "themes";

export const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
