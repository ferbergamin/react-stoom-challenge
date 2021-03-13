import { useContext } from 'react'

import OrderContext from 'contexts/OrderContext'

const useOrder = () => {
  const context = useContext(OrderContext)

  if (context === undefined) {
    throw new Error('useOrder possui contexto inválido')
  }

  return {
    data: context.data,
    setData: context.setData,
    loadData: context.loadData,
  }
}

export default useOrder
