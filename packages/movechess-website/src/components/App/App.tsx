import { Provider } from "react-redux"
import { store } from "../../app/store"
import Footer from "../Layout/ Footer"
import Header from "../Layout/Header"
import Router from "../Router/Router"
import Toast from "../Toast/Toast"

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Toast />
      <Router />
      <Footer />
    </Provider>
  )
}

export default App
