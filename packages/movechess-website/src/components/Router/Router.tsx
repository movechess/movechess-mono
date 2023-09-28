import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, LandingPageV2 } from "./elements"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageV2 />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
