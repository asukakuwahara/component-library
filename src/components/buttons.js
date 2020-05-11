import styled from "styled-components";
import { typeScale } from "../utils";

import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = 
{
  small: () => `
  font-size: ${typeScale.helperText};
  padding: 8px;
  `,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 16px;
  `,

  warning: ({props}) => `
  background-color: ${props.theme.status.warningColor};
  color: ${props.theme.status.warningColor};
  &:hover, &:focus {
    background-color: ${props.theme.status.warningColorHover};
    outline: 3px solid ${props.theme.status.warningColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${props.theme.status.warningColorActive};
  }
`,
primaryButtonWarning: ({props}) => `
  background-color: ${props.theme.status.warningColor};
  color: ${props.textColorInverted};
`,
secondaryButtonWarning: ({props}) => `
  border: 2px solid ${props.theme.status.warningColor};
`,
error: ({props}) => `
  background: none;
  color: ${props.theme.status.errorColor};
  &:hover, &:focus {
    background-color: ${props.theme.status.errorColorHover};
    outline: 3px solid ${props.theme.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${props.theme.status.errorColorActive};
  }
`,
primaryButtonError: ({props}) => `
  background-color: ${props.theme.status.errorColor};
  color: ${props.theme.textColorInverted};
`,
secondaryButtonError: ({props}) => `
  border: 2px solid ${props.theme.status.warningColor};
`,
success: ({props}) => `
  background: none;
  color: ${props.theme.status.successColor};
  &:hover, &:focus {
    background-color: ${props.theme.status.successColorHover};
    outline: 3px solid ${props.theme.status.successColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${props.theme.status.successColorActive};
  }
`,
primaryButtonSuccess: ({props}) => `
  background-color: ${props.theme.status.successColor};
  color: ${props.theme.textColorInverted};
`,
secondaryButtonSuccess: ({props}) => `
  border: 2px solid ${props.theme.status.warningColor};
`

}
const Button = styled.button`
  font-size: ${typeScale.paragraph};
  padding: 12px 24px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorPrimary};
  }
  &:focus {
    background-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorPrimary};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  border: none;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorPrimary};
  &:disabled {
    background-color: ${props => props.theme.primaryColorDisabled};
    color: ${props => props.theme.textColorPrimary};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  background: none;
  color: ${props => props.theme.primaryColor};
  &:disabled {
    background: none;
    color: ${props => props.theme.textColorPrimary};
    cursor: not-allowed;
    border-color: ${props => props.theme.primaryColorDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

const TertiaryButton = styled(Button)`
  border: none;
  background: none;
  color: ${props => props.theme.primaryColor};
  &:disabled {
    border: none;
    background: none;
    color: ${props => props.theme.textColorPrimary};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

//apply modifiers to each buttons instead of base 
// to make sure modifiers is the last one to override other CSS

export { PrimaryButton, SecondaryButton, TertiaryButton };
