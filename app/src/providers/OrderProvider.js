import React, { useState } from 'react'

import OrderContext from 'contexts/OrderContext'
import { Toast } from 'components'

const OrderProvider = ({ children }) => {
  const [data, setData] = useState()

  const loadData = () => {}

  return (
    <OrderContext.Provider
      value={{
        data,
        setData,
        loadData,
      }}
    >
      {children}
      <Toast />
    </OrderContext.Provider>
  )
}

export default OrderProvider
