import { useContext } from 'react'

import ToastContext from 'contexts/ToastContext'

const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast possui contexto inválido')
  }

  const { toast, dispatchToast, close } = context

  return {
    toast,
    dispatchToast,
    close,
  }
}

export default useToast
