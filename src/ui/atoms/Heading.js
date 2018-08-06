import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export const Heading = styled.p`
    color: ${p=>`${p.color}`};
    font-size: ${p=>`${p.size}px`};
    font-family: ${p=>`${p.font}`};

    ${p=>p.lineHeight && css`
        line-height: ${p.lineHeight}px;
    `};
    ${p=>p.fontWeight && css`
        font-weight: ${p.fontWeight};
    `}
    ${p=>p.letterSpacing && css`
        letter-spacing: ${p.letterSpacing}em;
    `}
    ${p=>p.textAlign && css`
        text-align:${p.textAlign}
    `}
`

Heading.propTypes ={
    color: PropTypes.string,
    size: PropTypes.number,
    font: PropTypes.string
}

Heading.defaultProps ={
    color: "black",
    size: 24,
    font: "Nova, sans-serif",
    fontWeight:300
}