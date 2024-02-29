import React from "react"
import SnowImage from "../../images/Snow-image.png"

const Information: React.FC = () => {
  return (
    <div className="absolute top-[100%] z-[-1] w-full p-5 pl-10 pt-0 bg-[#101927]">
      <div className="flex">
        {/*<div className="h-[100] w-[10px] bg-amber-950 border b"></div>*/}
        <div className="flex h-[300px] px-[25px] py-5 items-center gap-[25px] flex-[1_0_0] border-[1px] border-[solid] border-[rgba(255,255,255,0.10)] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.10)_0%,_rgba(255,_255,_255,_0.00)_100%)]">
          <div className="w-1/3 h-full flex justify-center items-center">
            <div className="h-[100%] w-[32px] border-2 border-r-0 border-[#36B2E7] opacity-75"></div>
            <img className="w-[187px] h-[198px]" src={SnowImage} />
            <div className="h-[100%] w-[32px] border-2 border-l-0 border-[#36B2E7] opacity-75"></div>
          </div>
          <div className="flex flex-col justify-between w-2/3 h-full">
            <p className="text-[#FFF] text-[36px] not-italic font-light leading-[normal]">
              Place Holder Text
            </p>
            <p className="text-[#FFF] text-[16px] not-italic font-normal leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex items-center gap-[25px] self-stretch">
              <div className="h-[15px] flex-[1_0_0] rounded-[16px] bg-[#939393]"></div>
              <div className="h-[15px] flex-[1_0_0] rounded-[16px] bg-[#939393]"></div>
              <div className="h-[15px] flex-[1_0_0] rounded-[16px] bg-[#939393]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Information
