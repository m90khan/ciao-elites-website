import { initGallery } from './gallery';
import { initHeaderTilt } from './header';
import { initNavigation } from './navigation';
import { initPortfolioAnimation } from './portfolio';

export const initAnimations = () => {
  initNavigation();
  initHeaderTilt();
  initGallery();
  initPortfolioAnimation();
};
