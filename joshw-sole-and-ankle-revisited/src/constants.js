export const COLORS = {
  // white: 'hsl(0deg 0% 100%)',
  // gray: {
  //   100: 'hsl(185deg 5% 95%)',
  //   300: 'hsl(190deg 5% 80%)',
  //   500: 'hsl(196deg 4% 60%)',
  //   700: 'hsl(220deg 5% 40%)',
  //   900: 'hsl(220deg 3% 20%)',
  // },
  // primary: 'hsl(340deg 65% 47%)',
  // secondary: 'hsl(240deg 60% 63%)',
  white: 'white',
  gray: {
    100: 'white',
    300: 'white',
    500: 'white',
    700: 'white',
    900: 'white',
  },
  primary: 'white',
  secondary: 'white',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phonetMaxWidth: 600,
  tabletMaxWidth: 950,
  laptopMaxWidth: 1300
}

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phonetMaxWidth/16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMaxWidth/16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMaxWidth/16}rem)`
}

export const ORIENTATIONS = {
  portrait: '(orientation: portrait)'
}