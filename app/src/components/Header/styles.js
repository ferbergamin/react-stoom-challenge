const styles = (theme) => {
  return {
    header: {
      padding: theme.space(1, 'px'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.white,
      boxShadow: '-4px 6px 6px -6px black',
    },
    h4: {
      margin: 0,
      fontSize: theme.text.fontSize.h4,
    },
    aTag: {
      marginRight: theme.space(2, 'px'),
    },
  }
}

export default styles
