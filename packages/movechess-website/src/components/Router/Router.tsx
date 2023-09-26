import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, LandingPageV2 } from "./elements"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPageV2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
