import React from 'react'
import { Button } from 'react-bootstrap'

import useBackend from 'hooks/useBackend'
import useToast from 'hooks/useToast'

import { pizzas } from 'helpers'

const OrderRow = ({ order, refresh = () => {} }) => {
  const { dispatchBackend } = useBackend()
  const { dispatchToast } = useToast()
  const removeOrder = () => {
    dispatchBackend({
      type: 'DELETE',
      tableName: 'Orders',
      payload: { id: order.id },
      dispatchToast: dispatchToast,
    })

    refresh()
  }

  return (
    <tr>
      <td>{order.id}</td>
      <td>{pizzas.generateDescription(order)}</td>
      <td>{pizzas.formatPrice(order?.ammount, order?.points)}</td>
      <td>
        <Button variant="dark" onClick={removeOrder}>
          Remover
        </Button>
      </td>
    </tr>
  )
}

export default OrderRow
