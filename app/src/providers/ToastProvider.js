import React, { useState, useReducer } from 'react'
import { Toast } from 'components'

import ToastContext from 'contexts/ToastContext'
import toastReducer from 'reducers/toastReducer'

const initialToast = {
  visible: false,
  message: 'alou',
  variant: 'danger',
  vertical: 'bottom',
  horizontal: 'left',
}

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(initialToast)

  const handleToastOpen = (params) => {
    setToast({ ...initialToast, ...params, visible: true })
  }

  const [stateToast, dispatchToast] = useReducer(toastReducer, {
    open: handleToastOpen,
    close: () => setToast({ ...toast, visible: false }),
    toast,
  })

  const handleToastClose = () => {
    setToast({ ...toast, visible: false })
    dispatchToast({ type: 'CLOSE' })
  }

  return (
    <ToastContext.Provider
      value={{
        toast: stateToast,
        close: handleToastClose,
        dispatchToast,
      }}
    >
      {children}
      <Toast />
    </ToastContext.Provider>
  )
}

export default ToastProvider
