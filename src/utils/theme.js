import { blue, neutral, yellow, red, green } from "./colors";
import primaryFont from "./typography";

export const DarkTheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],
  primaryColorDisabled: neutral[400],
  textColorPrimary: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};

export const defaultTheme = {
  primaryColor: neutral[300],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[100],
  primaryColorDisabled: blue[400],
  textColorPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};
