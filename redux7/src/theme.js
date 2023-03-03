export const colors = {
  bg: '#EDEDED',
  main: '#FFFFFF',
};

export const sizes = {
  widescreen: 1440,
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 640,
  mini: 425,
};

export const device = {
  widescreen: '(max-width: 1440px)',
  desktop: '(max-width: 1280px)',
  laptop: '(max-width: 1024px)',
  tablet: '(max-width: 768px)',
  phone: '(max-width: 640px)',
  mini: '(max-width: 425px)',
};

export const lineClamp = (clampCount) => {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${clampCount};
    -webkit-box-orient: vertical;
    overflow: hidden;
    `;
};
