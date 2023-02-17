type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface ThemeConfig {
  initialColorMode: "system" | "light" | "dark";
  useSystemColorMode: boolean;
}

interface Colors {
  primary: Color;
  secondary: Color;
  tertiary: Color;
  border: Color;
  background: Color;
  text: Color;
  textSecondary: Color;
  transparent: String;
}

interface Theme {
  colors: Colors;
  config: ThemeConfig;
}

const colors: Colors = {
  primary: "#FF0000",
  secondary: "#00FF00",
  tertiary: "#0000FF",
  border: "#000000",
  background: "#177177",
  text: "#000000",
  textSecondary: "#000000",
  transparent: "transparent",
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

export const theme: Theme = {
  colors,
  config,
};
