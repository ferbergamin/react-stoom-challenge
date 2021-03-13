import React from 'react'
import { Button } from 'react-bootstrap'

import useBackend from 'hooks/useBackend'
import useToast from 'hooks/useToast'

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
      <td>
        Uma pizza {order?.PizzaSize?.name} bem caprichada, com a deliciosa massa{' '}
        {order?.PizzaDough?.name} e recheada com {order?.PizzaFilling?.name}
      </td>
      <td>
        R$
        {(order?.ammount - (order?.ammount * order?.points) / 100).toFixed(2)}
      </td>
      <td>
        <Button variant="dark" onClick={removeOrder}>
          Remover
        </Button>
      </td>
    </tr>
  )
}

export default OrderRow
