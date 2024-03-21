import React from "react"
import Header from "../components/LandingPage/Header/Header"
import Hero from "../components/LandingPage/Hero"
import FeatureSection from "../components/LandingPage/Feature/FeatureSection"
import RoadMap from "../components/LandingPage/RoadMap/RoadMap"
import About from "../components/LandingPage/About"

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto h-screen relative">
      <Header></Header>
      <div className="flex xl:px-[150px] lg:px-[80px] px-[10px] pb-[100px] py-0 flex-col items-center xl:gap-[80px] gap-[40px] md:mt-[140px] mt-[102px]">
        <Hero></Hero>
        <FeatureSection></FeatureSection>
        <RoadMap></RoadMap>
        <About></About>
      </div>
    </div>
  )
}

export default LandingPage
