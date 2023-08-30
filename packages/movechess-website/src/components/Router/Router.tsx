import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { LazyHome } from "./elements"

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LazyHome />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
