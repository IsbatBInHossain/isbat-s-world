const initialState = {
  show: false,
  message: '',
  type: 'danger',
}

const useAlert = () => {
  const [alert, setAlert] = useState(initialState)

  const showAlert = ({ message, type = 'danger' }) => {
    setAlert({
      show: true,
      message,
      type,
    })
  }

  const hideAlert = () => {
    setAlert(initialState)
  }

  return { alert, showAlert, hideAlert }
}

export default useAlert
