import ToastProvider from 'providers/ToastProvider'
import BackendProvider from 'providers/BackendProvider'

const GlobalProvider = ({ children }) => {
  return (
    <ToastProvider>
      <BackendProvider>{children}</BackendProvider>
    </ToastProvider>
  )
}

export default GlobalProvider
