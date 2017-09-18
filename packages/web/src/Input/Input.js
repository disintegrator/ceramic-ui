import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: ${props => (props.inline ? "auto" : "100%")};
  display: ${props => (props.inline ? "inline-block" : "block")};
  padding: ${prop => `${prop.theme.paddingY()} ${prop.theme.paddingX()}`};
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  font-size: ${props => props.theme.fontSize()};
  border: ${props => props.theme.borderWidth()} solid currentColor;
  border-radius: ${props => props.theme.borderRadius()};
  touch-action: manipulation;
  background-color: ${props => props.theme.white};
  color: inherit;
  ${props => !!props.valid && `color: ${props.theme.brandSuccess}`};
  ${props => !!props.invalid && `color: ${props.theme.brandDanger}`};
  ${props => !!props.disabled && "color: inherit"};
  &:focus {
    outline: ${props =>
      `${props.theme.borderWidth()} solid ${props.theme.focusColor}`};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${props => props.theme.brandDisabled};
    cursor: not-allowed;
  }
`;
Input.displayName = "Input";
Input.propTypes = {
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool
};

export default Input;
