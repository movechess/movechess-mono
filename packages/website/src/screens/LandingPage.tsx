import React from "react"
import Header from "../components/Header/Header"

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex px-[150px] py-0 flex-col items-center gap-[80px] mt-[80px]">
        <div className="flex h-[564px] pl-[100px] justify-between items-center flex-shrink-0 self-stretch rounded-[15px] bg-[#000] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)]">

        </div>
        <div className="flex p-[50px] justify-between items-center self-stretch bg-[linear-gradient(0deg,_#171B1F_0%,_rgba(30,_38,_48,_0.00)_100%)]">
          <div className="flex w-[300px] h-[450px] flex-col justify-end items-center"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
