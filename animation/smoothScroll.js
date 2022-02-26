import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let bodyScrollBar;

export const initSmoothLinkScroll = () => {
  // find all links and animate to the right position

  gsap.utils.toArray('.fixed-nav a').forEach((link) => {
    const target = link.getAttribute('href');

    link.addEventListener('click', (e) => {
      e.preventDefault();
      bodyScrollBar.scrollIntoView(document.querySelector(target), {
        damping: 0.07,
        offsetTop: 100,
      });
      //   gsap.to(window, {
      //     damping: 0.07,
      //     offsetTop: 100,
      //     scrollTo: target,
      //     ease: 'Power2.out',
      //   });
    });
  });
};

// GSAP scroll scrolling
// let height;
// function setHeight(container) {
//   height = container.clientHeight;
//   document.body.style.height = `${container.clientHeight}px`;
// }
// export const initScrollTrigger = () => {
//   let container = document.querySelector('#scroll-container');
//   setHeight(container);

//   gsap.to(container, {
//     y: () => -(height - document.documentElement.clientHeight),
//     ease: 'Power3.out',
//     scrollTrigger: {
//       trigger: document.body,
//       start: 'top top',
//       end: 'bottom bottom',
//       scrub: 2,
//     },
//   });
// };

export const initSmoothScrollBar = () => {
  bodyScrollBar = Scrollbar.init(document.querySelector('#viewport'), {
    damping: 0.04,
  });
  bodyScrollBar.track.xAxis.element.remove();
  // keep ScrollTrigger in sync with Smooth Scrollbar
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value; // setter
      }
      return bodyScrollBar.scrollTop; // getter
    },
  });

  // when the smooth scroller updates, tell ScrollTrigger to update() too:
  bodyScrollBar.addListener(ScrollTrigger.update);
};
