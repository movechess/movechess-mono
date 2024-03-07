import React from "react"

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 flex px-[25px] py-[10px] justify-between items-center rounded-tl-none rounded-br-[15px] rounded-tr-none rounded-bl-[15px] bg-[linear-gradient(90deg,_rgba(0,_0,_0,_0.10)_0%,_rgba(129,_129,_129,_0.10)_100%)] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[7.5px]">
      <div className="flex gap-[25px]">
        <div className="logo-container">
          <a href="/">
            <img
              className="w-[50px] h-[50px]"
              src="/images/Logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <p className="flex items-center text-[#FFF] font-[AmstelvarAlpha] text-[32px] not-italic font-normal leading-[normal]">
          MOVE CHESS
        </p>
      </div>
      <div className="flex">
        <div>
          <p className="text-[#FFF] text-center font-[AmstelvarAlpha] text-[20px] not-italic font-normal leading-[normal] uppercase">
            NFT AIRDORP 1
          </p>
          <p className="text-[#46C8FF] text-center font-[Assistant] text-[16px] not-italic font-bold leading-[normal] uppercase">
            05:06:08:02
          </p>
        </div>
      </div>
      <div className="flex gap-[25px]">
        <div>
          <a href="/2">
            <p className="text-[#FFF] text-center font-[Assistant] text-[18px] not-italic font-light leading-[normal]">
              CRYPTO
            </p>
          </a>
        </div>
        <div>
          <a href="/2">
            <p className="text-[#FFF] text-center font-[Assistant] text-[18px] not-italic font-light leading-[normal]">
              ABOUT
            </p>
          </a>
        </div>
        <div>
          <a href="/2">
            <p className="text-[#FFF] text-center font-[Assistant] text-[18px] not-italic font-light leading-[normal]">
              ROADMAP
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Header
