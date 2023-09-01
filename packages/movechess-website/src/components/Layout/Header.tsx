import { useEffect, useState } from "react"
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed max-w-[1536px] flex justify-center z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-[#0c0f14] backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-5 md:px-9">
        <div className="flex items-center justify-between h-32 md:h-32 ">
          {/* Site branding */}
          <div className="shrink-0 mr-4 lg:ml-14">
            <img
                className="w-[65px] sm:w-[105px] sm:h-[74px]"
                src={"/images/move-chess-logo.png"}
                alt="logo"
            />
          </div>
          <div className="hidden md:flex w:5/12 lg:w-7/12 flex justify-between lg:px-9">
            <ul className="flex w-full text-[16px] lg:text-[20px] font-bold">
              <li className="flex-grow flex-shrink-0 p-4">
                <button>Home</button>
              </li>
              <li className="flex-grow flex-shrink-0 p-4">
                <button>Team</button>
              </li>
              <li className="flex-grow flex-shrink-0 p-4">
                <button>ChessPapers</button>
              </li>
              <li className="flex-grow flex-shrink-0 p-4">
                <button>Activities</button>
              </li>
            </ul>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex grow justify-end flex-wrap items-center space-x-4 text-[12px] lg:text-[16px]">
              <li>
                <button className="text-black font-bold w-32 lg:w-52 bg-white border-2 border-black shadow-2xl py-2 rounded-lg ring-2 ring-gray-200 ring-opacity-10">
                  SIGN UP
                </button>
              </li>
              <li>
                <button className="font-bold bg-black w-32 lg:w-52 border-2 border-white shadow-2xl py-2 rounded-lg ring-2 ring-gray-200 ring-opacity-10">
                  CONNECT WALLET
                </button>
              </li>
            </ul>
          </nav>
          <MobileHeader />
        </div>
      </div>
    </header>
  )
}
