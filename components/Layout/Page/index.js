import React, { useEffect } from 'react';
import { initAnimations } from '../../../animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '../../UI/Header';
import Navigation from '../../UI/Navigation';
import RevealGallery from '../../UI/RevealGallery';
import { initScrollTrigger, initSmoothScrollBar } from '../../../animation/smoothScroll';
import Loader from '../../UI/Loader';

gsap.registerPlugin(ScrollTrigger);
const Page = ({ children }) => {
  useEffect(() => {
    initSmoothScrollBar();
    // ScrollTrigger.addEventListener('refreshInit', initScrollTrigger);
    window.addEventListener('load', () => {
      initAnimations();
    });
  }, []);
  return (
    <>
      <Navigation />
      <Loader />
      <div id='viewport'>
        {/* <div id='scroll-container'> */}
        <main id='main' data-barba='container'>
          <Header />
          {children}
        </main>
        {/* </div> */}
      </div>
    </>
  );
};

export default Page;
