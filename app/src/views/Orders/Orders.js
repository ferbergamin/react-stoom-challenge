import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import OrderTable from './components/OrdersTable'

import useOrder from 'hooks/useOrderProvider'

import useTheme from 'hooks/useTheme'
import styles from './styles'
import { routes } from 'Routes'

const Orders = () => {
  const style = useTheme(styles)
  const [orders, setOrders] = useState([])
  const { loadOrders } = useOrder()
  const loadData = () => {
    setOrders(loadOrders)
  }

  useEffect(() => {
    loadData()
    //eslint-disable-next-line
  }, [])

  return (
    <Container fluid="xl" style={style.container}>
      <h4 style={style.h4}>Meus pedidos</h4>

      <OrderTable orders={orders} refresh={loadData} />
      <Link className="btn btn-secondary" to={routes.root}>
        Voltar
      </Link>
    </Container>
  )
}

export default Orders
