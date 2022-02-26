import React, { useEffect } from 'react';
import { initAnimations } from '../../../animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '../../UI/Header';
import Navigation from '../../UI/Navigation';
import RevealGallery from '../../UI/RevealGallery';

gsap.registerPlugin(ScrollTrigger);
const Page = ({ children }) => {
  useEffect(() => {
    window.addEventListener('load', () => {
      initAnimations();
    });
  }, []);
  return (
    <>
      <Navigation />
      <div id='viewport'>
        <main id='main' data-barba='container'>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Page;
