import React, { useState } from 'react'

import OrderContext from 'contexts/OrderContext'
import { Toast } from 'components'
import fakeApi from 'services/fakeApi'
import useBackend from 'hooks/useBackend'

const OrderProvider = ({ children }) => {
  const [data, setData] = useState()
  const { dispatchBackend } = useBackend()
  const [orderLoaded, setOrderLoaded] = useState(false)

  const loadData = () => {
    let activeOrder = fakeApi.findBy(fakeApi.get('Orders'), {
      finalized: false,
    })

    if (!activeOrder[0]) {
      dispatchBackend({
        type: 'POST',
        tableName: 'Orders',
        payload: {
          PizzaDough: {},
          PizzaFilling: {},
          pizzaSize: {},
          ammount: 0,
          points: 0,
          finalized: false,
        },
      })
    }

    activeOrder = fakeApi.findBy(fakeApi.get('Orders'), { finalized: false })
    setData(activeOrder[0])
    if (!orderLoaded) {
      setOrderLoaded(true)
    }
  }

  const updateOrder = (field, id, value = '') => {
    var dataUpdate = value

    if (['PizzaDoughs', 'PizzaSizes', 'PizzaFillings'].includes(field)) {
      dataUpdate = fakeApi.find(fakeApi.get(field), Number(id))
    }

    dispatchBackend({
      type: 'UPDATE',
      tableName: 'Orders',
      payload: {
        id: data.id,
        params: {
          [field.slice(0, -1)]: dataUpdate,
        },
      },
    })
    loadData()
  }

  // const finalizeOrder = () => {}

  return (
    <OrderContext.Provider
      value={{
        data,
        setData,
        loadData,
        updateOrder,
        orderLoaded,
      }}
    >
      {children}
      <Toast />
    </OrderContext.Provider>
  )
}

export default OrderProvider
