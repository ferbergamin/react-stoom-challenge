const styles = (theme) => {
  return {
    container: {
      padding: theme.space(2, 'px'),
      minHeight: '87vh',
    },
    card: {
      marginTop: theme.space(2, 'px'),
      marginBottom: theme.space(2, 'px'),
      padding: theme.space(1, 'px'),
      backgroundColor: theme.color.success,
    },
  }
}

export default styles
