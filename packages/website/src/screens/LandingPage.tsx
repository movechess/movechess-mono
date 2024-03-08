import React from "react"
import Header from "../components/LandingPage/Header"
import Hero from "../components/LandingPage/Hero"
import AboutSite from "../components/LandingPage/AboutSite"

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto h-screen relative">
      <Header></Header>
      <div className="flex xl:px-[150px] lg:px-[80px] px-[10px] py-0 flex-col items-center gap-[80px] md:mt-[80px] mt-[30px]">
        <Hero></Hero>
        <AboutSite></AboutSite>
      </div>
    </div>
  )
}

export default LandingPage
