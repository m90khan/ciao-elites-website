import { initGallery } from './gallery';
import { initHeaderTilt } from './header';
import { initLoader } from './loader';
import { initNavigation } from './navigation';
import { initImageParallax, initPinSteps } from './parallax';
import { initPortfolioAnimation } from './portfolio';
import { initSmoothScrollBar, initSmoothLinkScroll } from './smoothScroll';
import { updateBackgroundColor } from './utilities';

export const initAnimations = () => {
  // updateBackgroundColor('#202020');
  initLoader();
  initNavigation();
  initHeaderTilt();
  initGallery();
  initPortfolioAnimation();
  initImageParallax();
  initPinSteps();
  initSmoothLinkScroll();
};
