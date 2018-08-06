import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Layout = styled.div`
  display: ${p => p.display};
  background-color: ${p => p.background};
  flex-direction: ${p => `${p.flow}`};
  margin: ${p => `${p.margin}`};
  padding: 0;
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
  ${p =>
    p.width &&
    css`
      width: ${p.width}px;
    `};
  ${p =>
    p.padding &&
    css`
      padding: ${p.padding};
    `};
  ${p =>
    p.widthPercent &&
    css`
      width: ${p.widthPercent}%;
    `};
  ${p =>
    p.height &&
    css`
      height: ${p.height}px;
    `};
`;

Layout.propTypes = {
  flow: PropTypes.oneOf(['column', 'row']).isRequired,
  margin: PropTypes.string,
  display: PropTypes.oneOf(['block', 'flex', 'inline']),
  justify: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around'
  ]),
  align: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'stretch',
    'unset',
    'baseline'
  ]),
  width: PropTypes.number
};

Layout.defaultProps = {
  display: 'flex',
  justify: undefined,
  align: undefined,
  flow: 'column',
  margin: '0px'
};
