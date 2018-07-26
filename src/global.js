import {injectGlobal} from 'styled-components';

export default injectGlobal`
 *{
     margin:0;
     padding:0;
 }
  .ReactModal__Body--open {
    overflow: hidden;
  }
  .ReactModalPortal > div {
    opacity: 0;
}

.ReactModalPortal .ReactModal__Overlay {
  transition: opacity 400ms ease-in-out;
  background: rgba(0, 0, 0, 0.15);
  &--after-open {
    opacity: 1;
  }
  &--before-close {
      opacity: 0;
  }
}
`