import { useEffect, useState } from "react"
import MobileHeader from "./MobileHeader"

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
      className={`fixed w-full max-w-[1536px] w-[1536px] flex justify-center m-auto right-0 left-0 z-30 xl:bg-opacity-90 transition duration-300 ease-in-out bg-[#131315] xl:bg-transparent${
        !top ? "xl:bg-[#131315] backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="flex justify-center mx-auto w-full">
        <div className="flex items-center h-24 md:h-28 lg:h-32 w-full px-16">
          {/* Site branding */}
          <div className="shrink-0 mr-16 lg:ml-14">
            <img
              className="w-16 sm:w-20 md:w-24 lg:w-28"
              src={"/images/move-chess-logo.png"}
              alt="logo"
            />
          </div>
          <div className="hidden xl:flex w:5/12 lg:w-9/12 flex justify-between lg:px-9">
            <ul className="flex w-full text-base md:text-lg lg:text-xl font-bold">
              <li className="flex-grow mr-4 text-start flex-shrink-0 p-4">
                <button>Home</button>
              </li>
              <li className="flex-grow mr-4 text-start flex-shrink-0 p-4">
                <button>Team</button>
              </li>
              <li className="flex-grow mr-4 text-start flex-shrink-0 p-4">
                <button>ChessPapers</button>
              </li>
              <li className="flex-grow mr-4 text-start flex-shrink-0 p-4">
                <button>Activities</button>
              </li>
            </ul>
          </div>

          <nav className="hidden xl:flex ml-12">
            <ul className="flex w-full justify-end flex items-center space-x-4 text-s lg:text-sm">
              <li>
                <button className="text-black font-bold w-32 lg:w-40 bg-white border-2 border-black shadow-2xl py-2 rounded-lg ring-2 ring-gray-200 ring-opacity-10">
                  SIGN UP
                </button>
              </li>
              <li>
                <button className="font-bold bg-black w-32 lg:w-40 border-2 border-white shadow-2xl py-2 rounded-lg ring-2 ring-gray-200 ring-opacity-10">
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
