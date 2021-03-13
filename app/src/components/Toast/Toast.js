import React from 'react'
import {
  Toast as ToastBootstrap,
  ToastHeader,
  ToastBody,
  Alert,
} from 'react-bootstrap'

import useToast from 'hooks/useToast'
import useTheme from 'hooks/useTheme'
import styles from './styles'

const Toast = () => {
  const { toast, close } = useToast()

  const style = useTheme(styles)
  return (
    <ToastBootstrap
      style={style.toast}
      show={toast.toast.visible}
      onClose={close}
    >
      <ToastHeader>
        <strong className="mr-auto">Mensagem</strong>
      </ToastHeader>
      <ToastBody
        as={Alert}
        style={style.alertBody}
        variant={toast.toast.variant}
      >
        <ToastBody>{toast.toast.message}</ToastBody>
      </ToastBody>
    </ToastBootstrap>
  )
}

export default Toast
