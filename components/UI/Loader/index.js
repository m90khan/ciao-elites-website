import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderContainer className='loader-container'>
      <div className='loader'>
        <div className='loader__mask'>
          <div className='inner'>
            <div className='progress'></div>
          </div>
          {/* <!-- this will scale up --> */}
        </div>
      </div>
      <div className='loader__content'>
        <div className='inner'>
          {/* <!-- this will be animated on top of the dark background --> */}
          <div className='loader__title'>
            <div className='loader__title--mask'>
              <span>Anything </span>
            </div>
            <div className='loader__title--mask'>
              <span>Is Possible</span>
            </div>
          </div>
          <div className='loader__image'>
            <div className='loader__image--mask'>
              <img src='/images/img_landscape-01-large.jpg' />
            </div>
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Loader;

export const LoaderContainer = styled.div`
  .loader,
  .loader__content {
    min-height: 100vh;
    position: fixed;
    flex-direction: column;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    visibility: hidden;
    overflow: hidden;
  }
  .loader__mask {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--bcg-loaderblue) url('/images/img_logo.svg') no-repeat center;
    background-size: 155px 155px;
    overflow: hidden;
  }
  .loader .inner,
  .loader__content .inner {
    width: var(--loader-width);
    height: var(--loader-height);
  }
  .loader .inner {
    background-color: var(--bcg-loaderbluedark);
    position: relative;
  }
  .loader .progress {
    background-color: var(--bcg-lightblue);
    position: absolute;
    left: 0;
    top: 0;
    width: var(--loader-width);
    height: var(--loader-height);
  }
  .loader__content {
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    visibility: hidden; /* hide loader content by default */
  }
  .loader__title {
    font-size: 7vw;
    line-height: 8vw;
    margin: 0;
    font-family: var(--font-headings);
    color: var(--text-color);
    font-weight: normal;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .loader__image {
    width: var(--loader-width);
    padding-bottom: 50vh;
    overflow: hidden;
    position: relative;
  }
  .loader__title--mask {
    overflow: hidden;
  }
  .loader__title--mask span {
    display: block;
  }
  .loader__image--mask {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
