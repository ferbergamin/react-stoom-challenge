const toastReducer = (state, action) => {
  const { type } = action
  let data = {}
  const toast = state.toast
  switch (type) {
    case 'SUCCESS':
      data = {
        ...data,
        visible: true,
        variant: 'success',
        message: action.message,
      }
      state.open(data)
      return { ...state, toast: { ...toast, ...data } }
    case 'ERROR':
      data = {
        ...data,
        visible: true,
        variant: 'danger',
        message: action.message,
      }
      state.open({ visible: true, variant: 'danger', message: action.message })
      return { ...state, toast: { ...toast, ...data } }
    case 'CLOSE':
      state.close()
      return { ...state, toast: { ...toast, visible: false } }
    default:
      return state
  }
}

export default toastReducer
