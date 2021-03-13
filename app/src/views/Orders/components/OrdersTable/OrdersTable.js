import { Table } from 'react-bootstrap'
import OrderRow from './OrderRow'

const OrdersTable = ({ orders, refresh }) => {
  const toMapItems = orders.filter((order) => order.finalized)

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Identificador</th>
          <th>Descrição</th>
          <th>Total</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {toMapItems.map(
          (order) =>
            order?.finalized && (
              <OrderRow key={order.id} order={order} refresh={refresh} />
            ),
        )}
        {toMapItems.length === 0 && (
          <tr>
            <td colSpan="4">Nenhum pedido encontrado :(</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default OrdersTable
