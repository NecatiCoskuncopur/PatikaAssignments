import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "32px",
      7: "50px",
      8: "64px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "32px",
      6: "48px",
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 700,
    },
    fonts: {
      heading: "'Inter', 'sans-serif'",
      body: "'Roboto', 'sans-serif'",
    },
    radii: {
      1: "4px",
      2: "8px",
      3: "16px",
    },
    colors: {
      main: "#ffffff",
      color1: '#000000DE',
      color2: '#00000099',
    }
  },
  media: {
    bp1: "(max-width: 1536px)",
    bp2: "(max-width: 1280px)",
    bp3: "(max-width: 1024px)",
    bp4: "(max-width: 768px)",
    bp5: "(max-width: 640px)",
  },
  utils: {
    m: (value) => ({ margin: value }),
    pa: (value) => ({ padding: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    mt: (value) => ({ marginTop: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    ml: (value) => ({ marginLeft: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    pt: (value) => ({ paddingTop: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    pl: (value) => ({ paddingLeft: value }),
  },
});