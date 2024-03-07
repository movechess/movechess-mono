import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, LandingPage } from "./elements"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
