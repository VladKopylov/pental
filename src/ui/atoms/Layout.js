import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Layout = styled.div`
  display: flex;
  flex-direction: ${p => `${p.flow}`};
  margin: ${p => `${p.margin}`};
  padding: 0;
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
  ${p =>
    p.maxWidth &&
    css`
      max-width: ${p.maxWidth}px;
    `};
`;

Layout.propTypes = {
  flow: PropTypes.oneOf(["column", "row"]).isRequired,
  padding: PropTypes.number,
  margin: PropTypes.string,
  justify: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),
  align: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "strecth",
    "unset",
    "baseline"
  ]),
  maxWidth: PropTypes.number
};

Layout.defaultProps = {
  padding: 0,
  justify: undefined,
  align: undefined,
  flow: "column"
};
