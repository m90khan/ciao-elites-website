import gsap from 'gsap';

export const updateBodyColor = (color) => {
  // gsap.to('.fill-background', { backgroundColor: color, ease: 'none'});
  document.documentElement.style.setProperty('--bcg-fill-color', color);
};
export const updateBackgroundColor = (color) => {
  gsap.to('.fill-background', { backgroundColor: color, ease: 'none' });
  // document.documentElement.style.setProperty('--bcg-fill-color', color);
};
export const getTextHeight = (textCopy) => {
  return textCopy.clientHeight;
};
