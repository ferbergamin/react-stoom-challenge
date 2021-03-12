const styles = (theme) => {
  const CARD_STYLES = {}
  return {
    stepper: {
      margin: theme.space(2, 'px'),
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
