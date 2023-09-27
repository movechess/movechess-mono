import BackgroundTextLoop from "../components/Layout/BackgroundTextLoop"
import Introduction from "../components/Layout/Introduction"
import Slogan from "../components/Layout/Slogan"
import { useEffect, useRef, useState } from "react"

const LandingPageV2: React.FC = () => {
  const [numDivs, setNumDivs] = useState(0)
  const divLoop = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const calculateNumDivs = () => {
      const windowHeight = window.innerHeight
      let divHeight = 100
      if (divLoop.current) {
        divHeight = divLoop.current.clientHeight
      }
      const numDivsNeeded = Math.ceil(windowHeight / divHeight)
      setNumDivs(numDivsNeeded)
    }

    calculateNumDivs()
    window.addEventListener("resize", calculateNumDivs)

    return () => {
      window.removeEventListener("resize", calculateNumDivs)
    }
  }, [])

  return (
    <>
      <div className="lg:flex lg:justify-center ">
        <div className="max-w-[1536px] lg:w-[1536px] h-screen min-w-[400px]">
          <div className="flex">
            <div className="fixed inset-0 flex flex-wrap items-center pointer-events-none overflow-hidden h-screen">
              {[...Array(numDivs).keys()].map((index) => (
                <div key={index} ref={divLoop} className="flex-nowrap text-2xl">
                  <div className="flex opacity-30 overflow-hidden">
                    <BackgroundTextLoop></BackgroundTextLoop>
                  </div>
                  <div className="flex opacity-20">
                    <BackgroundTextLoop></BackgroundTextLoop>
                  </div>
                  <div className="flex opacity-10">
                    <BackgroundTextLoop></BackgroundTextLoop>
                  </div>
                </div>
              ))}
              <div className="bg-black opacity-70 w-full h-full absolute"></div>
            </div>
          </div>
          <Slogan></Slogan>
          <Introduction></Introduction>
        </div>
      </div>
    </>
  )
}

export default LandingPageV2
