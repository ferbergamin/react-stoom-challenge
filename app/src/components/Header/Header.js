import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import { routes } from 'Routes'

import useStepper from 'hooks/useStepper'

import useTheme from 'hooks/useTheme'
import styles from './styles'

const Header = () => {
  const style = useTheme(styles)
  const { activeStep } = useStepper()
  return (
    <header style={style.header}>
      <Navbar className="mr-auto" variant="light">
        <h4 style={style.h4}>React Stoom Pizza Challenge</h4>
      </Navbar>
      {activeStep === 4 && (
        <a href="/" className="btn btn-success" style={style.aTag}>
          Novo pedido
        </a>
      )}
      <Link to={routes.orders} className="btn btn-secondary">
        Meus pedidos
      </Link>
    </header>
  )
}

export default Header
