import { useContext } from 'react'

import ToastContext from 'contexts/ToastContext'

const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast possui contexto inválido')
  }

  return {
    toast: context.toast,
    dispatchToast: context.dispatchToast,
    close: context.close,
  }
}

export default useToast
