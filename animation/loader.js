import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import imagesloaded from 'imagesloaded';
gsap.registerPlugin(ScrollTrigger);
// Header Tilt
export const initLoader = () => {
  init();
};

function initLoaderContent() {
  const loader = document.querySelector('.loader');
  const loaderInner = document.querySelector('.loader .inner');
  const progressBar = document.querySelector('.loader .progress');
  const loaderMask = document.querySelector('.loader__mask');
  const tlLoaderIn = gsap.timeline({
    id: 'tlLoaderIn',
    defaults: {
      duration: 1.1,
      ease: 'power2.out',
    },
    // onComplete: () => initContent(),
  });

  const image = document.querySelector('.loader__image img');
  const mask = document.querySelector('.loader__image--mask');
  const line1 = document.querySelector('.loader__title--mask:nth-child(1) span');
  const line2 = document.querySelector('.loader__title--mask:nth-child(2) span');
  const lines = document.querySelectorAll('.loader__title--mask');
  const loaderContent = document.querySelector('.loader__content');

  tlLoaderIn
    .set([loader, loaderContent], { autoAlpha: 1 })
    .to(loaderInner, {
      scaleY: 1,
      transformOrigin: 'bottom',
      ease: 'power1.inOut',
    })
    .addLabel('revealImage')
    .from(mask, { yPercent: 100 }, 'revealImage-=0.6')
    .from(image, { yPercent: -80 }, 'revealImage-=0.6')
    .from([line1, line2], { yPercent: 100, stagger: 0.1 }, 'revealImage-=0.4');

  const tlLoaderOut = gsap.timeline({
    id: 'tlLoaderOut',
    defaults: {
      duration: 1.2,
      ease: 'power2.inOut',
    },
    delay: 1,
  });

  tlLoaderOut
    .to(lines, { yPercent: -500, stagger: 0.2 }, 0)
    .to([loader, loaderContent], { yPercent: -100 }, 0.2)
    .to('.loader-container', { yPercent: -100 }, 0.2)
    .from('#main', { y: 150 }, 0.2);

  const tlLoader = gsap.timeline();
  tlLoader.add(tlLoaderIn).add(tlLoaderOut);
}

function init() {
  const loader = document.querySelector('.loader');
  const loaderInner = document.querySelector('.loader .inner');
  const progressBar = document.querySelector('.loader .progress');
  // show loader on page load
  gsap.set(loader, { autoAlpha: 1 });

  // scale loader down
  gsap.set(loaderInner, { scaleY: 0.005, transformOrigin: 'bottom' });

  // make a tween that scales the loader
  const progressTween = gsap.to(progressBar, {
    paused: true,
    scaleX: 0,
    ease: 'none',
    duration: 3,
    transformOrigin: 'right',
  });

  // setup variables
  // https://codepen.io/desandro/pen/hlzaw
  let loadedImageCount = 0,
    imageCount;
  const container = document.querySelector('#main');

  // setup Images loaded
  const imgLoad = imagesloaded(container);
  imageCount = imgLoad.images.length;

  // set the initial progress to 0
  updateProgress(0);

  // triggered after each item is loaded
  imgLoad.on('progress', function () {
    // increase the number of loaded images
    loadedImageCount++;
    // update progress
    updateProgress(loadedImageCount);
  });

  // update the progress of our progressBar tween
  function updateProgress(value) {
    // console.log(value/imageCount)
    // tween progress bar tween to the right value
    gsap.to(progressTween, {
      progress: value / imageCount,
      duration: 0.3,
      ease: 'power1.out',
    });
  }

  // do whatever you want when all images are loaded
  imgLoad.on('done', function (instance) {
    // we will simply init our loader animation onComplete
    gsap.set(progressBar, { autoAlpha: 0, onComplete: initLoaderContent });
  });
}
