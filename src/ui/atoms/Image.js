import styled, {css} from 'styled-components';

export const Image = styled.img`
  width: ${p=>`${p.width}px`};
  opacity: ${p=>p.opacity};
  ${p=>p.marginLeft && css`
    margin-left:${p.marginLeft}px;
  `}
`;

