import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./elements"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
