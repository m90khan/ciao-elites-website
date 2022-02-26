import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getTextHeight, updateBackgroundColor, updateBodyColor } from './utilities';

gsap.registerPlugin(ScrollTrigger);

export const initPortfolioAnimation = () => {
  const allLinks = gsap.utils.toArray('.portfolio__categories a');
  allLinks.forEach((link) => {
    link.addEventListener('mouseenter', createPortfolioHover);
    link.addEventListener('mouseleave', createPortfolioHover);
    link.addEventListener('mousemove', createPortfolioMove);
  });
};

function createPortfolioHover(e) {
  const allLinks = gsap.utils.toArray('.portfolio__categories a');
  const largeImage = document.querySelector('.portfolio__image--l');
  const smallImage = document.querySelector('.portfolio__image--s');
  const lInside = document.querySelector('.portfolio__image--l .image_inside');
  const sInside = document.querySelector('.portfolio__image--s .image_inside');
  const pageBackground = document.querySelector('.fill-background');
  const chapterText = document.querySelector('.chapter-portfolio');

  if (e.type === 'mouseenter') {
    // change images to the right urls
    // fade in images
    // all siblings to white and fade out
    // active link to white
    // update page background color

    const { color, imagelarge, imagesmall } = e.target.dataset;
    const allSiblings = allLinks.filter((item) => item !== e.target);
    const tl = gsap.timeline({
      onStart: () => updateBackgroundColor(color),
    });
    tl.set(lInside, { backgroundImage: `url(${imagelarge})` })
      .set(sInside, { backgroundImage: `url(${imagesmall})` })
      .to([largeImage, smallImage], { autoAlpha: 1 })
      .to(allSiblings, { color: '#fff', autoAlpha: 0.2 }, 0)
      .to(e.target, { color: '#fff', autoAlpha: 1 }, 0)
      .to(chapterText, { color: '#fff', autoAlpha: 1 }, 0);
  } else if (e.type === 'mouseleave') {
    // fade out images
    // all links back to black
    // change background color back to default

    const tl = gsap.timeline({
      onStart: () => updateBackgroundColor('#202020'),
    });
    tl.to([largeImage, smallImage], { autoAlpha: 0 })
      .to(allLinks, { color: '#a6b3b3', autoAlpha: 1 }, 0)
      .to(chapterText, { color: '#ACB7AE', autoAlpha: 1 }, 0);
  }
}

function createPortfolioMove(e) {
  const largeImage = document.querySelector('.portfolio__image--l');
  const smallImage = document.querySelector('.portfolio__image--s');
  const { clientY } = e;

  // move large image
  gsap.to(largeImage, {
    duration: 1.2,
    y: getPortfolioOffset(clientY) / 5,
    x: getPortfolioOffset(clientY) / 9,

    ease: 'power3.out',
  });

  // move small image
  gsap.to(smallImage, {
    duration: 1.5,
    y: getPortfolioOffset(clientY) / 2.5,
    x: getPortfolioOffset(clientY) / 8,

    ease: 'power3.out',
  });
}

function getPortfolioOffset(clientY) {
  return -(document.querySelector('.portfolio__categories').clientHeight - clientY);
}
