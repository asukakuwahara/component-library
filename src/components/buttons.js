import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  font-size: ${typeScale.paragraph};
  padding: 12px 24px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorPrimary};
  }
  &:focus {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorPrimary};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  border: none;
  background: ${defaultTheme.primaryColor};
  color: white;
  &:disabled {
    background-color: ${defaultTheme.primaryColorDisabled};
    color: ${defaultTheme.textColorPrimary};
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  background: none;
  color: ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    color: ${defaultTheme.textColorPrimary};
    cursor: not-allowed;
  }
`;

const TernaryButton = styled(Button)`
  border: none;
  background: none;
  color: ${defaultTheme.primaryColor};
  &:disabled {
    border: 2px solid ${defaultTheme.primaryColor};
    background: none;
    color: ${defaultTheme.textColorPrimary};
    cursor: not-allowed;
  }
`;

export { PrimaryButton, SecondaryButton, TernaryButton };
