const styles = (theme) => {
  const CARD_STYLES = {
    marginTop: theme.space(2, 'px'),
  }
  return {
    stepper: {
      margin: theme.space(1, 'px'),
      color: theme.text.color.secondary,
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
    },
    card: { backgroundColor: theme.color.white, ...CARD_STYLES },
    cardActive: {
      ...CARD_STYLES,
      backgroundColor: theme.color.primary,
    },
    cardConcluded: {
      ...CARD_STYLES,
      backgroundColor: theme.color.success,
    },
  }
}

export default styles
