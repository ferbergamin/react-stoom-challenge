import { useContext } from 'react'

import OrderContext from 'contexts/OrderContext'

const useOrder = () => {
  const context = useContext(OrderContext)

  if (context === undefined) {
    throw new Error('useOrder possui contexto inválido')
  }

  const { data, setData, loadData, updateOrder, orderLoaded } = context

  return {
    data,
    setData,
    loadData,
    updateOrder,
    orderLoaded,
  }
}

export default useOrder
