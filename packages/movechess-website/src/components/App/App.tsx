import { Provider } from "react-redux"
import { store } from "../../app/store"
import Router from "../Router/Router"
import Toast from "../Toast/Toast"

const App = () => {
  return (
    <Provider store={store}>
      <Toast />
      <Router />
    </Provider>
  )
}

export default App
