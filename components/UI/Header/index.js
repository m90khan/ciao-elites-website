import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <header data-color='#202020'>
        <h1 id='create'>
          <span>Consectetur</span>
          <span>Adipisicing</span>
          <span>Elites</span>
        </h1>
        <p className='subtitle'>
          VOLUPTAS AUT <br />& VERITASIS NOSTRUM
        </p>
        <div className='decor__circle'></div>
        <div className='header__gallery'>
          <div className='hg__left'>
            <div className='hg__image hg__image--l'>
              <img src='/images/img_landscape-01-large.jpg' />
            </div>
            <div className='hg__image hg__image--m'>
              <img src='/images/img_landscape-02-large.jpg' />
            </div>
            <div className='hg__image hg__image--s'>
              <img src='/images/img_landscape-03-large.jpg' />
            </div>
          </div>
          <div className='hg__right'>
            <div className='hg__image hg__image--l'>
              <img src='/images/img_landscape-03-large.jpg' />
            </div>
            <div className='hg__image hg__image--m'>
              <img src='/images/img_landscape-01-large.jpg' />
            </div>
            <div className='hg__image hg__image--s'>
              <img src='/images/img_landscape-02-large.jpg' />
            </div>
          </div>
        </div>
        <div className='cta__circle'>
          <div className='cta__circle--logo'></div>
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.div`
  /* =Header */
  header {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    perspective: 1500px;
    z-index: 2;
  }
  header h1 {
    font-family: var(--font-headings);
    font-weight: normal;
    color: #fff;
    font-size: 7vw;
    line-height: 7.4vw;
    z-index: 1;
    margin-bottom: 0;
    pointer-events: none;
  }
  header h1 span {
    display: block;
  }
  .subtitle {
    z-index: 1;
    font-size: 1.3vw;
    color: #fff;
    letter-spacing: 0.3vw;
    transform: translateX(-9vw);
    font-weight: 300;
    pointer-events: none;
  }
  .decor__circle {
    border: 1px white solid;
    border-radius: 100%;
    width: 23vw;
    height: 23vw;
    position: absolute;
    top: 45vh;
    left: 27vw;
    opacity: 0.4;
    pointer-events: none;
  }
  .cta__circle {
    width: 7.7vw;
    height: 7.7vw;
    position: absolute;
    top: auto;
    bottom: -3.8vw;
    left: 58%;
    background: url('/images/img_logo.svg') no-repeat center;
    background-size: 50% 50%;
    pointer-events: none;
  }
  .cta__circle--logo {
    width: 7.7vw;
    height: 7.7vw;
    background: url('/images/img_scroll-badge.svg') no-repeat center;
    background-size: 100% 100%;
    animation: rotation 45s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* =Header Gallery (random image proportion) 
  Calculate aspect by setting a width first, then adjust padding bottom.
  Example for image that you want to show as 16/9 - landscape
  width: 24vw, padding-bottom: (9/16) * width = 13.5
  
  Example for image that you want to show as 9/16 - portrait
  width: 24vw, padding-bottom: (16/9) * width = 42.6

  Have fun:)

*/
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
  .hg__left .hg__image:nth-child(1) {
    top: 17vh;
    left: 15vw;
  }
  .hg__left .hg__image:nth-child(2) {
    top: 30vh;
    left: 6vw;
  }
  .hg__left .hg__image:nth-child(3) {
    top: 56vh;
    left: 14vw;
  }
  .hg__right .hg__image:nth-child(1) {
    top: 15vh;
    left: auto;
    right: 21vw;
    width: 24vw;
    padding-bottom: 21vw;
  }
  .hg__right .hg__image:nth-child(2) {
    top: 27vh;
    left: auto;
    right: 10vw;
  }
  .hg__right .hg__image:nth-child(3) {
    top: 56vh;
    left: auto;
    right: 19vw;
    width: 16vw;
    padding-bottom: 20vw;
    z-index: 1;
  }
`;
