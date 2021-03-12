import React from 'react'
import {
  Toast as ToastBootstrap,
  ToastHeader,
  ToastBody,
  Alert,
} from 'react-bootstrap'
import useToast from 'hooks/useToast'

const Toast = () => {
  const { toast, close } = useToast()

  return (
    <ToastBootstrap
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: '10px',
        padding: 0,
        minWidth: '30%',
        backgroundColor: 'transparent',
      }}
      show={toast.toast.visible}
      onClose={close}
    >
      <ToastHeader>
        <strong className="mr-auto">Mensagem</strong>
      </ToastHeader>
      <Alert variant={toast.toast.variant}>
        <ToastBody>{toast.toast.message}</ToastBody>
      </Alert>
    </ToastBootstrap>
  )
}

export default Toast
