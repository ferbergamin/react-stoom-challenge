const styles = (theme) => {
  return {
    footer: {
      padding: theme.space(1, 'px'),
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.color.backgroumd,
      width: '100%',
    },
    span: {
      color: theme.text.color.secondary,
      fontSize: theme.text.fontSize.span,
    },
  }
}

export default styles
