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
  --bcg-fill-color: var(--text-dark-color);

  --loader-width: 27.36vw;
  --loader-height: 50vh;

  --v-spacing: 10vh;
  --h-gutter: 6.6vw;  

  --easing: cubic-bezier(0.5, 0.7, 0.4, 1);
}

body {
  font: 16px/1.7 'Source Sans Pro', Helvetica, Helvetica Neue, Arial, sans-serif;
  color: var(--text-dark-color);
  background: var(--text-dark-color) ;
  /* overflow-y : scroll */
  
}
.is-loading {
  background-color: var(--bcg-loaderblue);
}
#viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

#scroll-container{
  overflow: hidden;
  position: absolute;
 
  width: 100%;
   will-change : transform;
   backface-visibility: hidden

}


.chapter {
    position: absolute;
    left: var(--h-gutter);
    top: var(--v-spacing);
    z-index: 2;
    color: var(--text-color);
    font-size: 1.6vw;
  }
  .chapter span {
    opacity: 0.4;
  }

  .fill-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  will-change: background-color;
  background-color: var(--bcg-fill-color);
  transition: background-color 0.3s linear;
}
.has-scrolled .burger {
    transform: translateX(100%);
  }
  .has-scrolled .logo__img {
    opacity: 1;
  }
  .has-scrolled .logo__text {
    opacity: 0;
  }
  main {
  z-index: 1;
  position: relative;
}
section {
  position: relative;
}
.with-padding {
  padding: var(--v-spacing) 0;
}
.with-padding-bottom {
  padding-bottom: var(--v-spacing);
}
.hg__image,
  .rg__image {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    pointer-events: none;
  }
  .hg__image--l {
    width: 18vw;
    padding-bottom: 26vw;
  }
  .hg__image--m {
    width: 18vw;
    padding-bottom: 26.55vw;
  }
  .hg__image--s {
    width: 13vw;
    padding-bottom: 19vw;
  }
  .hg__image img,
  .rg__image img,
  .blog__image img,
  .stage__image img,
  .loader__image img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 0.8;
  }
  /* fixed nav */
  .fixed-nav {
    position: absolute;
    top: calc(var(--v-spacing) * 3);
    left: var(--h-gutter);
  }
  .fixed-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .fixed-nav li {
    overflow: hidden;
  }
  .fixed-nav a {
    color: var(--text-color);
    text-decoration: none;
    font-family: var(--font-headings);
    position: relative;
    padding-left: 1.8vw;
    transform: translateX(-1.8vw);
    display: block;
    opacity: 0.4;
    transition: all 0.3s var(--easing);
  }

  .fixed-nav li a::before {
    content: '';
    display: block;
    height: 2px;
    width: 1.3vw;
    background-color: var(--text-color);
    position: absolute;
    top: 50%;
    left: 0;
  }
  .fixed-nav li.is-active a {
    transform: translateX(0);
    opacity: 1;
  }
.loader-container{
  background: #202020;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  overflow: hidden
}
`;
