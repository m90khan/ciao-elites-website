import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getTextHeight, updateBackgroundColor, updateBodyColor } from './utilities';

gsap.registerPlugin(ScrollTrigger);

export const initImageParallax = () => {
  // select all sections .with-parallax
  gsap.utils.toArray('.with-parallax').forEach((section) => {
    // get the image
    const image = section.querySelector('img');

    // create tween for the image
    gsap.to(image, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom', // top of image is at the bottom
        scrub: true,
        // scrub: 2, for gsap scrolltrigger scroll
      },
    });
  });

  // change background on mouse leave
  document.querySelector('.blog-container').addEventListener('mouseleave', () => {
    updateBackgroundColor('#101010');
  });
};

// Fixed navigation
export const initPinSteps = () => {
  ScrollTrigger.create({
    trigger: '.fixed-nav',
    start: 'top center',
    endTrigger: '#stage4',
    end: 'center center', // endtrigger comes at the middle of viewport
    pin: true,
    pinReparent: true, // take the container out of the current context and add it to body => s
  });

  const getVh = () => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    return vh;
  };

  gsap.utils.toArray('.stage').forEach((stage, index) => {
    const navLinks = gsap.utils.toArray('.fixed-nav li');

    ScrollTrigger.create({
      trigger: stage,
      start: 'top center',
      end: () => `+=${stage.clientHeight + getVh() / 10}`,
      toggleClass: {
        targets: navLinks[index],
        className: 'is-active',
      },
      onEnter: () => updateBackgroundColor(stage.dataset.color),
      onEnterBack: () => updateBackgroundColor(stage.dataset.color), // scroll back
    });
  });
};
