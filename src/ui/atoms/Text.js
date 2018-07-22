import styled, {css} from 'styled-components';
import PropTypes from 'prop-types'

export const Text = styled.p`
    font-family: ${p=>`${p.font}`};
    font-size: ${p=>`${p.size}px`};
    color:${p=>`${p.color}`};
    ${
        p=>p.lineHeight && css`
            line-height: ${p.lineHeight}px;
        `
    }
`

Text.propTypes ={
    font: PropTypes.string,
    size:PropTypes.number,
    color:PropTypes.string
}

Text.defaultProps = {
  font: "Nova, sans-serif",
  size: 15,
  color:"black"
};