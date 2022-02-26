import React from 'react';
import styled from 'styled-components';
import Contact from '../Contact';

const Blog = () => {
  return (
    <BlogContainer className='blog-container'>
      <section className='blog with-padding-bottom with-parallax'>
        <h2 className='chapter'>
          <span>003 -</span> Blog
        </h2>
        <div className='blog__post'>
          <div className='blog__image'>
            <img src='/images/img_portfolio-02-480-720.jpg' />
          </div>
          <div className='blog__text'>
            <p className='post__date'>17.08.20</p>
            <h3>Quae Accusamus Consequuntur Sequi Ullam</h3>
          </div>
        </div>
      </section>
      <section className='how-we-work with-padding'>
        <h2 className='chapter'>
          <span>004 -</span> How We Work
        </h2>
        <div className='fixed-nav'>
          <ul>
            <li>
              <a href='#stage1'>Amet Consectetur </a>
            </li>
            <li>
              <a href='#stage2'>Eum Similique</a>
            </li>
            <li>
              <a href='#stage3'>Cupiditate Vel</a>
            </li>
            <li>
              <a href='#stage4'>Dignissimos Sed</a>
            </li>
          </ul>
        </div>
        <div id='stage1' className='stage with-parallax' data-color='#8c8480'>
          <div className='stage__image'>
            <img src='/images/img_landscape-01-large.jpg' />
          </div>
          <div className='stage__heading'>
            <p>01</p>
            <h3>Amet Consectetur</h3>
          </div>
          <div className='stage__text'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel.
              Vel qui ipsum eum similique reiciendis dicta dignissimos sed ipsa.
            </p>
          </div>
        </div>
        <div id='stage2' className='stage with-parallax' data-color='#505156'>
          <div className='stage__image'>
            <img src='/images/img_landscape-02-large.jpg' />
          </div>
          <div className='stage__heading'>
            <p>02</p>
            <h3>Eum Similique</h3>
          </div>
          <div className='stage__text'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel.
              Vel qui ipsum eum similique reiciendis dicta dignissimos sed ipsa.
            </p>
          </div>
        </div>
        <div id='stage3' className='stage with-parallax' data-color='#717872'>
          <div className='stage__image'>
            <img src='/images/img_landscape-01-large.jpg' />
          </div>
          <div className='stage__heading'>
            <p>03</p>
            <h3>Cupiditate Vel</h3>
          </div>
          <div className='stage__text'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel.
              Vel qui ipsum eum similique reiciendis dicta dignissimos sed ipsa.
            </p>
          </div>
        </div>
        <div id='stage4' className='stage with-parallax' data-color='#ccb28b'>
          <div className='stage__image'>
            <img src='/images/img_landscape-02-large.jpg' />
          </div>
          <div className='stage__heading'>
            <p>04</p>
            <h3>Dignissimos Sed</h3>
          </div>
          <div className='stage__text'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel.
              Vel qui ipsum eum similique reiciendis dicta dignissimos sed ipsa.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </BlogContainer>
  );
};

export default Blog;

const BlogContainer = styled.div`
  .blog {
    color: var(--text-color);
  }
  .blog .chapter,
  .contact .chapter {
    top: inherit;
    left: inherit;
    position: relative;
    margin: 0 var(--h-gutter) var(--v-spacing) var(--h-gutter);
  }
  .blog__image {
    margin: 0 50% 0 16.6%;
    padding-bottom: 50%;
    position: relative;
    overflow: hidden;
  }
  .blog__image img {
    opacity: 1;
    height: 120%;
    top: -20%;
  }
  .post__date {
    font-size: 1.6vw;
    opacity: 0.6;
  }
  .blog__text {
    position: absolute;
    left: calc(50vw + var(--h-gutter));
    right: calc(var(--h-gutter) * 4);
    top: calc(50% + (var(--v-spacing) / 2)); /* 50% not 50vh becasue blog is not 100vh */
    transform: translateY(-50%);
  }
  .blog__text h3 {
    font-family: var(--font-headings);
    font-size: 3.6vw;
    line-height: 1.192307692;
    font-weight: normal;
    letter-spacing: 0.2vw;
  }
  .how-we-work .chapter {
    top: calc(var(--v-spacing) * 2);
  }
  /* .fixed-nav {
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
  } */

  .stage__heading {
    font-family: var(--font-headings);
    position: relative;
    z-index: 2; /* fix for Safari */
  }
  .stage__heading h3,
  .stage__heading p {
    position: absolute;
    left: 25vw;
    top: calc(var(--v-spacing) * -1.25);
    font-size: 3.6vw;
    font-weight: normal;
    margin: 0;
    white-space: nowrap;
    color: var(--text-color);
  }
  .stage__heading p {
    font-size: 1.6vw;
    opacity: 0.4;
    top: calc(var(--v-spacing) * -1.75);
  }
  .stage__image {
    width: calc(50vw + var(--h-gutter));
    margin: 0 var(--h-gutter) 0 33.33vw;
    padding-bottom: 33.33vw;
    background-color: #000000;
    overflow: hidden;
    position: relative;
    z-index: 1; /* fix for Safari */
  }
  .stage__image img {
    opacity: 0.9;
    height: 120%;
    top: -20%;
  }
  .stage__text {
    color: var(--text-color);
    margin: 0 calc(30vw + var(--h-gutter)) var(--v-spacing) 33.33vw;
  }
`;
