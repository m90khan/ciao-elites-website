import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getTextHeight, updateBodyColor } from './utilities';

gsap.registerPlugin(ScrollTrigger);

const initGalleryReveal = () => {
  const sections = document.querySelectorAll('.rg__column');
  sections.forEach((section) => {
    // get componenets for animation so attached it to section => section.blabla
    section.imageBlock = section.querySelector('.rg__image');
    section.image = section.querySelector('.rg__image img');
    section.mask = section.querySelector('.rg__image--mask');
    section.text = section.querySelector('.rg__text');
    section.textCopy = section.querySelector('.rg__text--copy');
    section.textMask = section.querySelector('.rg__text--mask');
    section.textP = section.querySelector('.rg__text--copy p');

    // reset the initial position
    gsap.set([section.imageBlock, section.textMask], { yPercent: -101 });
    gsap.set([section.mask, section.textP], { yPercent: 100 });
    gsap.set(section.image, { scale: 1.2 });

    // add event listeners to each section
    section.addEventListener('mouseenter', createHoverReveal);
    section.addEventListener('mouseleave', createHoverReveal);
  });
};
function createHoverReveal(e) {
  // console.log(e.type);

  const { imageBlock, mask, text, textCopy, textMask, textP, image, dataset } = e.target;

  const { color } = dataset;

  let tl = gsap.timeline({
    defaults: {
      duration: 1.8,
      ease: 'power4.out',
    },
  });

  if (e.type === 'mouseenter') {
    tl.to([mask, imageBlock, textMask, textP], {
      yPercent: 0,
      onStart: () => updateBodyColor(color),
    })
      .to(text, { y: () => -getTextHeight(textCopy) / 2 }, 0)
      .to(image, { duration: 1.1, scale: 1 }, 0);
  } else if (e.type === 'mouseleave') {
    tl.to([mask, textP], { yPercent: 100 })
      .to([imageBlock, textMask], { yPercent: -101 }, 0) // 0 means same time
      .to(text, { y: 0 }, 0)
      .to(image, { scale: 1.2 }, 0);
  }

  return tl;
}
// remove all inline gsap styles
function resetProps(elements) {
  // stop all tweens
  gsap.killTweensOf('*');
  // reset
  if (elements.length) {
    elements.forEach((el) => {
      el && gsap.set(el, { clearProps: 'all' });
    });
  }
}
const handleWithChange = (mq) => {
  if (mq) {
    initGalleryReveal();
  } else {
    const sections = document.querySelectorAll('.rg__column');
    sections.forEach((section) => {
      section.removeEventListener('mouseenter', createHoverReveal);
      section.removeEventListener('mouseleave', createHoverReveal);
      //remove all inline styles
      const { imageBlock, mask, text, textCopy, textMask, textP, image } = section;

      resetProps([imageBlock, mask, text, textCopy, textMask, textP, image]);
    });
  }
};

export const initGallery = () => {
  initGalleryReveal();
  const mq = window.matchMedia('(min-width: 768px)');

  mq.addListener(handleWithChange);
};
