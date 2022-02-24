import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initNavigation = () => {
  const mainNavLinks = gsap.utils.toArray('.main-nav a');

  mainNavLinks.forEach((link) => {
    link.addEventListener('mouseleave', (e) => {
      // add class
      link.classList.add('animate-out');

      setTimeout(() => {
        link.classList.remove('animate-out');
      }, 300);
    });
  });
  // reverse links
  const mainNavLinksRev = gsap.utils.toArray('.main-nav a').reverse();
  function navAnimation(direction) {
    const scrollingDown = direction === 1;
    const links = scrollingDown ? mainNavLinks : mainNavLinksRev;
    return gsap.to(links, {
      duration: 0.3,
      stagger: 0.05,
      autoAlpha: () => (scrollingDown ? 0 : 1),
      y: () => (scrollingDown ? 20 : 0),
      ease: 'power4.out',
    });
  }

  // updated trigger to #main instead of absolute 100
  ScrollTrigger.create({
    trigger: '#main',
    start: 'top  top=-200', // default 100px below viewport
    end: 'bottom bottom-=200',
    toggleClass: {
      targets: 'body',
      className: 'has-scrolled',
    },
    onEnter: ({ direction }) => navAnimation(direction), // direction => scrolling up or down
    onLeaveBack: ({ direction }) => navAnimation(direction), // onCome back
    markers: true,
  });
};
