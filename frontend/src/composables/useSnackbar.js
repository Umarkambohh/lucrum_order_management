import { reactive } from 'vue'

const snackbar = reactive({
  show: false,
  message: '',
  color: 'success',
  timeout: 4000
})

export function useSnackbar() {
  const show = (message, color = 'success', timeout = 4000) => {
    snackbar.message = message
    snackbar.color = color
    snackbar.timeout = timeout
    snackbar.show = true
  }

  const hide = () => {
    snackbar.show = false
  }

  return { snackbar, show, hide }
}
