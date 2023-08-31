import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "../../screens/LandingPage"
import { LazyHome } from "./elements"

const Router: React.FC = () => {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LazyHome />} errorElement={<LazyHome />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    // <HashRouter/>
  )
}

export default Router
