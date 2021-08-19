import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "#ffffff",
  dark: "#222E37",
});

export const textColor = theme("theme", {
  light: "#000000",
  dark: "#ffffff",
});

export const infoColor = theme("theme", {
  light: "#4a4a4a",
  dark: "#ffffff",
});

export const backgroundColor_lighter = theme("theme", {
  light: "#ffffff",
  dark: "#3B4753",
});

export const screenSize = {
  mobile: `(max-width: 700px)`,
};
