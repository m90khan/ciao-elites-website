import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
      <section className='contact with-padding-bottom is-flipped with-parallax'>
        <h2 className='chapter chapter-contact'>
          <span>005 -</span> Contact
        </h2>
        <div className='blog__post'>
          <div className='blog__image'>
            <img src='/images/img_portfolio-02-480-720.jpg' />
          </div>
          <div className='blog__text'>
            <h3>Quae Accusamus Consequuntur</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
              sed.
            </p>
          </div>
        </div>
      </section>
    </ContactContainer>
  );
};

export default Contact;

export const ContactContainer = styled.div`
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
  .chapter-contact {
    color: var(--text-color);
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
    p {
      color: white;
    }
  }
  .blog__text h3 {
    font-family: var(--font-headings);
    font-size: 3.6vw;
    line-height: 1.192307692;
    font-weight: normal;
    letter-spacing: 0.2vw;
    color: var(--text-color);
  }

  .is-flipped .blog__image {
    margin: 0 16.6% 0 50%;
  }
  .is-flipped .blog__text {
    right: calc(50vw + var(--h-gutter));
    left: 16.6%;
  }
`;
