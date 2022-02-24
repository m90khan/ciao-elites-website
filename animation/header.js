import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// Header Tilt
export const initHeaderTilt = () => {
  document.querySelector('header').addEventListener('mousemove', moveImages);
};

const moveImages = (e) => {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;
  /**
   * offsetX, offsetY => where we are on the screen. mouse position
   * clientWidth, clientHeight = gives the current height of the target =>header in this case
   */
  // console.log(offsetX, offsetY, clientWidth, clientHeight);
  // get 0 0 in the center // between -0.5 and +0.5
  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;

  const leftImages = gsap.utils.toArray('.hg__left .hg__image');
  const rightImages = gsap.utils.toArray('.hg__right .hg__image');

  const modifier = (index) => index * 1.2 + 0.5;

  // move left 3 images
  leftImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.5,
      x: xPos * 20 * modifier(index),
      y: yPos * 30 * modifier(index),
      rotationY: xPos * 40,
      rotationX: yPos * 5,
      ease: 'power3.out',
    });
  });

  // move right 3 images
  rightImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.5,
      x: xPos * 20 * modifier(index),
      y: -yPos * 30 * modifier(index),
      rotationY: xPos * 40,
      rotationX: yPos * 5,
      ease: 'power3.out',
    });
  });

  gsap.to('.decor__circle', {
    duration: 1.7,
    x: 100 * xPos,
    y: 120 * yPos,
    ease: 'power4.out',
  });
};
