const styles = (theme) => {
  return {
    container: {
      padding: theme.space(2, 'px'),
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    check: {
      display: 'flex',
      textAlign: 'justify',
      width: '100%',
    },
    recommendation: {
      paddingTop: theme.space(2, 'px'),
      backgroundColor: theme.color.success,
    },
  }
}

export default styles
