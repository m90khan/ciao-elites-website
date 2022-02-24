import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Navigation = () => {
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      <div className='logo'>
        <span className='logo__img'></span>
        <span className='logo__text'>Bella</span>
      </div>
      <div className='burger'>
        <button className='burger__open'>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className='main-nav'>
        <ul>
          <li>
            <a href='index.html'>Our Values</a>
          </li>
          <li>
            <a href='index2.html'>Portfolio</a>
          </li>
          <li>
            <a href='#0'>Blog</a>
          </li>
          <li>
            <a href='#0'>How We Work</a>
          </li>
          <li>
            <a href='#0'>Contact</a>
          </li>
        </ul>
      </nav>
    </NavigationContainer>
  );
};

export default Navigation;

export const NavigationContainer = styled.div`
  .logo {
    position: fixed;
    left: 0;
    height: var(--header-height);
    width: 280px;
    display: flex;
    align-items: center;
    z-index: 3;
    pointer-events: none;
  }
  .logo__img {
    width: 55px;
    height: 55px;
    background: url('/images/img_logo.svg') no-repeat center;
    background-size: 55px 55px;
    display: block;
    position: absolute;
    left: 1.2vw;
    transition: opacity 0.3s linear;
    opacity: 0;
  }
  .logo__text {
    color: var(--text-color);
    font-size: 3.125vw;
    font-family: var(--font-headings);
    letter-spacing: 7px;
    padding-left: var(--h-gutter);
    transition: opacity 0.3s linear;
    opacity: 1;
    text-transform: uppercase;
  }

  .burger {
    width: var(--burger-width);
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: auto;
    right: var(--h-gutter);
    display: flex;
    align-items: center;
    z-index: 2;
    transition: transform 0.3s var(--easing);
    transform: translateX(0);
  }
  .burger__open span {
    width: var(--burger-width);
    height: 2px;
    background-color: #fff;
    margin: 6px 0;
    display: block;
  }
  .burger button {
    position: absolute;
    cursor: pointer;
    border: none;
    padding: 0;
    height: 40px;
    background: none;
  }

  /* =Main Navigation */
  .main-nav {
    position: fixed;
    top: 0;
    right: calc(var(--h-gutter) + 3vw);
    z-index: 3;
  }
  .main-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .main-nav li {
    padding: 0;
    margin-right: 3vw;
    height: var(--header-height);
    display: flex;
    align-items: center;
  }
  .main-nav a {
    color: var(--text-color);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1vw;
    position: relative;
    overflow: hidden;
  }
  .main-nav a::after {
    display: block;
    content: '';
    height: 2px;
    background-color: var(--text-color);
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateX(-101%);
  }
  .main-nav a:hover::after {
    transition: transform 0.3s var(--easing);
    transform: translateX(0);
  }
  .main-nav a.animate-out::after {
    transition: transform 0.3s var(--easing);
    transform: translateX(100%);
  }

  /* Reveal logo and move buger when the user scrolls */
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
