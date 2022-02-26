import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <div className='fill-background'></div>
      <section className='portfolio with-padding'>
        <h2 className='chapter chapter-portfolio'>
          <span>002 -</span> Portfolio
        </h2>
        <div className='portfolio__categories'>
          <a
            href='#0'
            data-color='#b3a8b3'
            data-imagelarge='/images/img_portfolio-01-480-720.jpg'
            data-imagesmall='/images/img_portfolio-02-480-720.jpg'
          >
            Voluptas & Veritatis
          </a>
          <a
            href='#0'
            data-color='#bab6a8'
            data-imagelarge='/images/img_portfolio-02-480-720.jpg'
            data-imagesmall='/images/img_portfolio-01-480-720.jpg'
          >
            Nostrum & Quibusdam
          </a>
          <a
            href='#0'
            data-color='#a0abb4'
            data-imagelarge='/images/img_portfolio-01-480-720.jpg'
            data-imagesmall='/images/img_portfolio-02-480-720.jpg'
          >
            Elit & Laudantium
          </a>
          <a
            href='#0'
            data-color='#a3b1ae'
            data-imagelarge='/images/img_portfolio-02-480-720.jpg'
            data-imagesmall='/images/img_portfolio-01-480-720.jpg'
          >
            Tatione & Nona
          </a>
          <a
            href='#0'
            data-color='#afaba2'
            data-imagelarge='/images/img_portfolio-01-480-720.jpg'
            data-imagesmall='/images/img_portfolio-02-480-720.jpg'
          >
            Accusantium Bold
          </a>
        </div>
        <div className='portfolio__image--l'>
          <div className='image_inside image_inside--2'></div>
        </div>
        <div className='portfolio__image--s'>
          <div className='image_inside image_inside--1'></div>
        </div>
      </section>
    </PortfolioContainer>
  );
};

export default Portfolio;

export const PortfolioContainer = styled.div`
  .portfolio {
    margin-top: var(--v-spacing);
    .chapter-portfolio {
      color: var(--bcg-green);
    }
  }
  .portfolio .chapter {
    top: 0;
  }
  .portfolio__categories {
    display: flex;
    flex-direction: column;
  }
  .portfolio__categories a {
    font-family: var(--font-headings);
    color: var(--bcg-green);
    text-decoration: none;
    font-size: 5.4vw;
    margin: auto;
    letter-spacing: 0.2vw;
    line-height: 1.5;
  }
  .portfolio__categories a:hover {
    z-index: 1;
  }
  .portfolio__image--l,
  .portfolio__image--s {
    pointer-events: none; /* important to be able to hover over links under the image */
    position: absolute;
    width: 28vw;
    top: 11vh;
    left: 24vw;
    overflow: hidden;
    background-color: #000;
    visibility: hidden;
  }
  .portfolio__image--l {
    padding-bottom: 41.66vw;
  }
  .portfolio__image--s {
    width: 15vw;
    top: 25vh;
    left: 54vw;
    padding-bottom: 20vw;
  }
  .image_inside {
    position: absolute;
    opacity: 0.8;
    top: -10%;
    left: 0;
    width: 100%;
    height: 115%;
    background-size: cover;

    &--1 {
      background-image: url('./img/img_portfolio-01-480-720.jpg');
    }
    &--2 {
      background-image: url('./img/img_portfolio-02-480-720.jpg');
    }
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
`;
