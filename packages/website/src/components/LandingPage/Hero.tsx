import React from "react"

const Hero: React.FC = () => {
  return (
    <div className="relative flex 2xl:h-[703px] lg:h-[564px] h-[345px] lg:pl-[100px] md:pl-[50px] px-[10px] py-[10px] md:justify-between justify-center items-center flex-shrink-0 self-stretch rounded-[15px] bg-[#000] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="absolute z-10 flex flex-col md:px-0 px-3 md:gap-[25px] gap-[16px] md:w-1/2 w-full md:text-start text-center md:items-start items-center">
        <div className="md:hidden flex">
          <a href="/">
            <img
              className="w-[76px] h-[76px]"
              src="/images/Logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <p className="text-[#FFF] font-[AmstelvarAlpha] 2xl:text-[74px] lg:text-[48px] md:text-[32px] text-[24px] not-italic font-normal leading-[normal] self-stretch uppercase">
            THE FUTURE OF TOURNAMENT PLAY
          </p>
        </div>
        <div className="md:w-10/12">
          <p className="text-[#FFF] font-[Assistant] 2xl:text-[24px] lg:text-[16px] md:text-[14px] text-[12px] not-italic font-normal leading-[normal]">
            Revolutionizing online chess with smart-contract tournaments, where
            cutting-edge blockchain technology and dedicated Chess Arbiters
            ensure fairness and integrity.
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="text-[#FFF] font-[Assistant] 2xl:text-[16px] lg:text-[14px] text-[12px] not-italic font-normal leading-[normal]">
            Subscribe to our newsletter today to stay informed on development
            updates and more from MoveChess.
          </p>
        </div>
        <div className="flex items-center justify-between w-[134px] relative">
          <div className="w-[32px] h-[55px] border-[2px] border-r-0 border-[solid] border-[#00EEF4]"></div>
          <button className="absolute left-[12px] flex p-[10px] bg-[linear-gradient(108deg,_rgba(255,_255,_255,_0.10)_0%,_rgba(255,_255,_255,_0.00)_100%)] text-[#C5C5C5] text-[18px] not-italic font-semibold leading-[normal]">
            SUBSCRIBE
          </button>
          <div className="w-[32px] h-[55px] border-[2px] border-l-0 border-[solid] border-[#00EEF4]"></div>
        </div>
      </div>
      <div className="absolute right-0">
        <img
          className="2xl:h-[703px] lg:h-[564px] h-[345px] md:opacity-100 opacity-30 rounded-[15px]"
          src="/images/hero.png"
          alt="logo"
        />
      </div>
    </div>
  )
}
export default Hero
