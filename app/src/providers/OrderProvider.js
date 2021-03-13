import React, { useState } from 'react'

import OrderContext from 'contexts/OrderContext'
import { Toast } from 'components'

import fakeApi from 'services/fakeApi'
import useBackend from 'hooks/useBackend'
import useStepper from 'hooks/useStepper'

const OrderProvider = ({ children }) => {
  const [data, setData] = useState()
  const { dispatchBackend } = useBackend()
  const { finalizeStep, setToStep } = useStepper()
  const [orderLoaded, setOrderLoaded] = useState(false)

  const loadData = (cb = () => {}) => {
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
    const toInactivate = [0]
    if (activeOrder[0]?.PizzaDough?.id) {
      toInactivate.push(1)
    }
    if (activeOrder[0]?.PizzaSize?.id) {
      toInactivate.push(2)
    }
    if (activeOrder[0]?.PizzaFilling?.id) {
      toInactivate.push(3)
    }

    finalizeStep(toInactivate)
    setToStep(Math.max.apply(null, toInactivate) + 1)

    if (!orderLoaded) {
      setOrderLoaded(true)
    }
    cb(activeOrder[0])
  }

  const updateOrder = (field, id, value = '', cb = (data) => {}) => {
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

    loadData(cb)
  }

  const finalizeOrder = (data) => {
    const ammount =
      data.PizzaDough?.price + data.PizzaFilling?.price + data.PizzaSize?.price

    dispatchBackend({
      type: 'UPDATE',
      tableName: 'Orders',
      payload: {
        id: data.id,
        params: {
          finalized: true,
          ammount: ammount,
        },
      },
    })
    setData(fakeApi.find(fakeApi.get('Orders'), data.id))
  }

  return (
    <OrderContext.Provider
      value={{
        data,
        setData,
        loadData,
        updateOrder,
        orderLoaded,
        finalizeOrder,
      }}
    >
      {children}
      <Toast />
    </OrderContext.Provider>
  )
}

export default OrderProvider
