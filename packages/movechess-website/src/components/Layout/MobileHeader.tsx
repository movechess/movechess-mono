import React, { useEffect, useRef, useState } from "react"
import { Transition } from "@headlessui/react"
import {ConnectButton} from "@mysten/wallet-kit";

export default function MobileHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div className="flex ml-auto xl:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-current text-white-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="36" height="2" />
          <rect y="11" width="36" height="2" />
          <rect y="18" width="36" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-[#131315]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li className="flex justify-center">
              <div className="text-xl lg:text-3xl text-center">
                <p>Home</p>
              </div>
            </li>
            <li className="flex justify-center">
              <div className="text-xl lg:text-3xl text-center pt-9 sm:pt-16">
                <p>Team</p>
              </div>
            </li>
            <li className="flex justify-center">
              <div className="text-xl lg:text-3xl text-center pt-9 sm:pt-16">
                <p>ChessPapers</p>
              </div>
            </li>
            <li className="flex justify-center">
              <div className="text-xl lg:text-3xl text-center pt-9 sm:pt-16">
                <p>Activities</p>
              </div>
            </li>
            <li className="flex justify-center">
              <div className="text-xl lg:text-3xl text-center pt-9 sm:pt-16">
                <p>Sign Up</p>
              </div>
            </li>
            <li className="flex justify-center">
              <div className="text-xl lg:text-3xl text-center pt-9 sm:pt-16 btn-connect-wallet-mobile">
                <ConnectButton connectText="Connect Wallet" />
              </div>

            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
