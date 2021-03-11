const styles = (theme) => {
  return {
    header: {
      padding: theme.space(2, 'px'),
      backgroundColor: theme.color.white,
      color: theme.text.color.primary,
      width: '100%',
      boxShadow: '-4px 6px 6px -6px black',
    },
    h5: {
      margin: 0,
      fontSize: theme.text.fontSize.h5,
    },
  }
}

export default styles
