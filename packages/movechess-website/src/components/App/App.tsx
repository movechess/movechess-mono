import { Provider } from "react-redux"
import { store } from "../../app/store"
import Router from "../Router/Router"
import Toast from "../Toast/Toast"
import Header from "../Layout/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Toast />
      <Router />
    </Provider>
  )
}

export default App
