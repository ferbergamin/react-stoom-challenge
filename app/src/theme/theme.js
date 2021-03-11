const SPACING = 8

const theme = {
  color: {
    primary: '#FEC311',
    secodary: '#546e7a',
    error: '#e53935',
    success: '#43a047',
    backgroumd: '#333333',
    white: '#FFF',
  },
  space: (s, m) => {
    return `${s * SPACING}${m}`
  },
  text: {
    color: {
      primary: '#263238',
      secondary: '#FFF',
    },
    fontSize: {
      h6: '1.4rem',
      h5: '1.4rem',
      h4: '1.4rem',
      h3: '1.4rem',
      h2: '1.4rem',
      h1: '1.4rem',
    },
  },
}

export default theme
