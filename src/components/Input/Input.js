import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: ${props => (props.inline ? "auto" : "100%")};
  display: ${props => (props.inline ? "inline-block" : "block")};
  padding: ${prop => `${prop.theme.paddingY()} ${prop.theme.paddingX()}`};
  margin: 0;
  font-size: ${props => props.theme.fontSize()};
  border: 2px solid currentColor;
  touch-action: manipulation;
  background-color: ${props => props.theme.white};
  color: inherit;
  &:focus {
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${props => props.theme.brandMuted};
    cursor: not-allowed;
  }
`;
Input.displayName = "Input";
Input.propTypes = {};

export default Input;