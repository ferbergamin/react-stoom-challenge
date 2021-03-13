import React from 'react'

import { Spinner } from 'react-bootstrap'

import useTheme from 'hooks/useTheme'
import styles from './styles'

const LoadingComponent = ({ children, loading }) => {
  const style = useTheme(styles)

  if (loading) {
    return (
      <div style={style.loadingDiv}>
        <Spinner animation="border" variant="info" />
      </div>
    )
  }

  return children
}

export default LoadingComponent
