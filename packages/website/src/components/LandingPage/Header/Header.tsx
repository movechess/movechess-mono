import React, { useState } from "react"
import { Link } from "react-scroll"
import { Collapse } from "react-collapse"
import "./header.scss"
const Header: React.FC = () => {
  const [showHeaderCollapse, setShowHeaderCollapse] = useState(false)
  return (
    <div className="fixed z-[9999] top-0 left-0 right-0 flex flex-col px-[25px] py-[10px] justify-between items-center rounded-tl-none rounded-br-[15px] rounded-tr-none rounded-bl-[15px] bg-[linear-gradient(90deg,_rgba(0,_0,_0,_0.10)_0%,_rgba(129,_129,_129,_0.10)_100%)] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[7.5px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[25px]">
          <div className="logo-container">
            <a href="/">
              <img
                className="lg:w-[50px] lg:h-[50px] w-[36px] h-[36px]"
                src="/images/movechess-logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <p className="hidden md:flex items-center text-[#FFF] font-[AmstelvarAlpha] lg:text-[32px] text-[16px] not-italic font-normal leading-[normal]">
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
        <div className="hidden md:flex gap-[25px]">
          <div>
            <p className="text-[#FFF] text-center font-[Assistant] lg:text-[18px] text-[12px] not-italic font-light leading-[normal] cursor-pointer">
              <Link
                activeClass="active"
                to="crypto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CRYPTO
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[#FFF] text-center font-[Assistant] lg:text-[18px] text-[12px] not-italic font-light leading-[normal] cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[#FFF] text-center font-[Assistant] lg:text-[18px] text-[12px] not-italic font-light leading-[normal] cursor-pointer">
              <Link
                activeClass="active"
                to="road-map"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ROADMAP
              </Link>
            </p>
          </div>
        </div>
        <button
          className="flex md:hidden btn"
          onClick={() => setShowHeaderCollapse(!showHeaderCollapse)}
        >
          <img
            className={`w-[26px] h-[26px] icon-down ${showHeaderCollapse ? "is-open" : ""}`}
            src="/images/chevron-down.svg"
            alt="logo"
          />
        </button>
      </div>
      <Collapse isOpened={showHeaderCollapse}>
        <div
          className={`flex md:hidden justify-end items-center gap-[25px] w-screen p-[10px] pb-0 ${showHeaderCollapse ? "is-open" : ""}`}
        >
          <div>
            <p className="text-[#FFF] text-center font-[Assistant] lg:text-[18px] text-[12px] not-italic font-light leading-[normal] cursor-pointer">
              <Link
                activeClass="active"
                to="crypto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CRYPTO
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[#FFF] text-center font-[Assistant] lg:text-[18px] text-[12px] not-italic font-light leading-[normal] cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[#FFF] text-center font-[Assistant] lg:text-[18px] text-[12px] not-italic font-light leading-[normal] cursor-pointer">
              <Link
                activeClass="active"
                to="road-map"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ROADMAP
              </Link>
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  )
}
export default Header
