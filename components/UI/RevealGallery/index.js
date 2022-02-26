import React from 'react';
import styled from 'styled-components';

const RevealGallery = () => {
  return (
    <GalleryContainer>
      <section className='reveal-gallery'>
        <h2 className='chapter'>
          <span>001 -</span> Our Values
        </h2>
        <div className='rg__column left' data-color='#a6b3b3'>
          <div className='rg__text'>
            <div className='rg__text--heading'>
              <span>01</span>
              <h3>Adipisicing Elitare</h3>
            </div>
            <div className='rg__text--copy'>
              <div className='rg__text--mask'>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className='rg__image'>
            <div className='rg__image--mask'>
              <img src='/images/img_landscape-01-large.jpg' />
            </div>
          </div>
        </div>
        <div className='rg__column center' data-color='#b0a7a4'>
          <div className='rg__text'>
            <div className='rg__text--heading'>
              <span>02</span>
              <h3>Accusamus Accusantium</h3>
            </div>
            <div className='rg__text--copy'>
              <div className='rg__text--mask'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aut
                  veritatis.
                </p>
              </div>
            </div>
          </div>
          <div className='rg__image'>
            <div className='rg__image--mask'>
              <img src='/images/img_landscape-02-large.jpg' />
            </div>
          </div>
        </div>
        <div className='rg__column right' data-color='#a3abb1'>
          <div className='rg__text'>
            <div className='rg__text--heading'>
              <span>03</span>
              <h3>Ratione Quibusdam</h3>
            </div>
            <div className='rg__text--copy'>
              <div className='rg__text--mask'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aut
                  veritatis nostrum ratione quibusdam ea non laudantium accusamus
                  accusantium molestias.
                </p>
              </div>
            </div>
          </div>
          <div className='rg__image'>
            <div className='rg__image--mask'>
              <img src='/images/img_landscape-03-large.jpg' />
            </div>
          </div>
        </div>
      </section>
    </GalleryContainer>
  );
};

export default RevealGallery;

const GalleryContainer = styled.section`
  .reveal-gallery {
    width: 100%;
    height: 104vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    color: var(--text-color);
    position: relative;
    z-index: 1;
  }
  .rg__column {
    flex-grow: 1; /* equivalent to 33.33% */
    padding: 0 var(--h-gutter);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .rg__text--heading h3 {
    font-size: 3.6vw;
    line-height: 1.192307692;
  }
  .rg__text--heading span {
    font-size: 2vw;
    opacity: 0.5;
  }
  .rg__text--heading h3,
  .rg__text--heading span,
  .chapter {
    font-family: var(--font-headings);
    font-weight: normal;
  }
  .rg__text {
    max-width: 17vw;
    z-index: 1;
    position: relative;
  }
  .rg__text--copy,
  .stage__text p {
    font-weight: 300;
    letter-spacing: 0.03vw;
  }
  .rg__text--copy p {
    margin: 0;
  }
  .rg__column::before {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    content: '';
    width: 1px;
    height: 20vh;
    transform: translateY(-50%);
    background-color: var(--text-color);
    opacity: 0.4;
  }
  .rg__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .rg__image--mask {
    height: 100%;
    overflow: hidden;
  }
  .rg__image img {
    opacity: 0.6;
  }
  .rg__text--copy {
    position: absolute;
    overflow: hidden;
  }
  .rg__text--mask {
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    .reveal-gallery {
      flex-direction: row;
      height: 100vh;
    }
    .rg__column {
      min-height: auto;
    }
    .rg__text--copy {
      position: absolute;
      overflow: hidden;
    }
    .rg__text {
      max-width: 17vw;
    }
  }
`;
