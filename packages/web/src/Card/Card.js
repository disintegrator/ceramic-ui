import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { lighten } from "../colors";
import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const calloutMixin = colourName => css`
  border-color: ${props => props.theme[colourName]};
  box-shadow: inset 6px 0 0 -3px ${props => props.theme[colourName]},
    0px 2px 4px 0 ${props => props.theme.dropShadow};
`;

const appearances = {
  "callout-primary": calloutMixin("brandPrimary"),
  "callout-danger": calloutMixin("brandDanger"),
  "callout-success": calloutMixin("brandSuccess")
};

const Card = styled.div`
  ${props => spacingMixin};
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  border: ${props =>
    `${props.theme.borderWidth()} solid ${props.theme.borderColor}`};
  border-radius: ${props => props.theme.borderRadius()};
  background-color: ${props => props.theme.white};

  ${props => appearances[props.appearance]};
`;
Card.displayName = "Card";
Card.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)),
  ...spacingPropTypes
};

export default Card;
