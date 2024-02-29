import Header from "../components/Header/Header"
import LeftInfoBar from "../components/LeftInfoBar/LeftInfoBar"
import React from "react"
import RightSection from "../components/RightSection/RightSection"
const LandingPage: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-screen relative">
      <Header></Header>
      <LeftInfoBar></LeftInfoBar>
      <RightSection></RightSection>
    </div>
  )
}

export default LandingPage
