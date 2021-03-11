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
      h6: '1.4em',
      h5: '1.4em',
      h4: '1.4em',
      h3: '1.4em',
      h2: '1.4em',
      h1: '1.4em',
      span: '0.8em',
    },
  },
}

export default theme
