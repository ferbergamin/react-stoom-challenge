import React from 'react'
import useTheme from 'hooks/useTheme'
import styles from './styles.js'

const Footer = () => {
  const style = useTheme(styles)

  return (
    <footer style={style.footer}>
      <span style={style.span}>Desenvolvido com ❤ por Luiz F Bergamin</span>
      <span style={style.span}>React Stoom Challenge</span>
    </footer>
  )
}

export default Footer
