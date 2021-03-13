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
    card: { ...CARD_STYLES, backgroundColor: theme.color.white },
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
