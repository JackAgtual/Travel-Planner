import { toast, ToastOptions } from 'react-toastify'

export const timeBeforeNotification = 2000

const toastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
}

export function notifyLoading() {
  toast.info('Still loading. This only happens the first search.', toastConfig)
}
