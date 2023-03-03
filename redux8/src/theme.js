export const colors = {
  bg: {
    frenchPass: '#BBDDFD',
    regenStBlue: '#A7C8E7',
    oxfordBlue: '#3C4D5C',
    bostonBlue: '#428BCA',
    fern: '#5CB85C',
    wedgewood: '#5183A4',
  },
  border: {
    lynch: '#70869B',
    bostonBlue: '#357EBD',
    halfBaked: '#8EB6D8',
  },
  main: '#FFFFFF',
  fernFrond: '#527A1E',
  japaneseLaurel: '#008000',
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
