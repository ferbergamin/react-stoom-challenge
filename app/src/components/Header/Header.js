import React from 'react'
import useTheme from 'hooks/useTheme'
import styles from './styles'

const Header = () => {
  const style = useTheme(styles)

  return (
    <header style={style.header}>
      <h5 style={style.h5}>React Stoom Pizza Chalenge</h5>
    </header>
  )
}

export default Header
