import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --text-color: white;
  --text-dark-color: #202020;
  --header-height: 100px;
  --burger-width: 40px;
  --font-headings: Georgia, serif;

  --bcg-green: #ACB7AE;
  --bcg-lightgreen: #a6b3b3;
  --bcg-lightbrown: #b0a7a4;
  --bcg-lightblue: #a3abb1;

  --bcg-loaderblue: #758A94;
  --bcg-loaderbluedark: #566C76;
  --bcg-fill-color: var(--bcg-green);

  --loader-width: 27.36vw;
  --loader-height: 50vh;

  --v-spacing: 10vh;
  --h-gutter: 6.6vw;  

  --easing: cubic-bezier(0.5, 0.7, 0.4, 1);
}

body {
  font: 16px/1.7 'Source Sans Pro', Helvetica, Helvetica Neue, Arial, sans-serif;
  color: var(--text-dark-color);
  background: var(--text-dark-color)
}
/* #viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
} */

.has-scrolled .burger {
    transform: translateX(100%);
  }
  .has-scrolled .logo__img {
    opacity: 1;
  }
  .has-scrolled .logo__text {
    opacity: 0;
  }
`;
