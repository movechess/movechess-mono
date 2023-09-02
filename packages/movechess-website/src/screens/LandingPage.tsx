import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import FirstSection from "./First-Section"

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-[#131315] text-white flex justify-center ">
        <div className="pb-[15px] pt-[0px] sm:pb-[82px] sm:pt-[0px] max-w-[1536px] w-[1536px] min-w-[400px]">
          <section className="border-b flex flex-col ">
            <FirstSection />
            {/* Code Here */}
            <div className="lg:flex px-9 sm:px-[82px] sm:flex-row w-full h-[500px] items-end sm:items-center relative mt-[30%]">
              <img
                  className="absolute w-48 sm:w-auto z-2 opacity-50 mt-[-35%] ml-[-5%]"
                  src="/images/move-chess-rook2.png"
                  alt=""
              />
              <img
                  className="absolute z-2 opacity-30 ml-[30%]"
                  src="/images/move-chess-rook-dark-wood.png"
                  alt=""
              />
              <div className="w-[100%] relative z-10 ml-9 pr-5">
                <p className="text-3xl lg:text-4xl font-bold z-10 break-words">
                  Chess Unleashed: Your Way, Your Moves
                </p>
                <p className="xl:w-4/5 lg:w-4/5 text-xl lg:text-2xl mt-1 z-10">
                  Customize your chess experience with unique sets and
                  challenges. Dive into endless strategic possibilities where
                  each move defines your style. Play it your way.
                </p>
              </div>
              <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[55%] xl:w-[44%]">
                {/* <div className="w-full"></div> */}
                <img
                    className="hidden lg:block absolute z-2 min-w-[30%] lg:w-7/12 w-9/12 xl:w-9/12 h-auto z-0 right-0 lg:mt-[-50%] xl:mt-[-60%] opacity-50"
                    src="/images/move-chess-rook.png"
                    alt=""
                />
                <img
                  className="absolute min-w-[30%] w-9/12 lg:w-6/12 xl:w-7/12 h-auto z-0 right-0 sm:top-36 lg:md:top-[-30px] "
                  src="/images/move-chess-tb.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full flex justify-center mb-[30px] xl:my-28">
              <img
                className="opacity-30 w-48 sm:w-auto xl:w-96 ml-[-45%] mt-[-80%] sm:mt-[-25%] mt-[-10%] z-[-1]"
                src="/images/move-chess-knight.png"
                alt=""
              />
            </div>
            <div className="relative px-9 sm:px-[82px]">
              <span className="relative font-bold text-1xl sm:text-4xl z-10 flex justify-center text-center">
                Get More Updates
              </span>
              <img
                className="absolute w-48 sm:w-auto bottom-[-20px] sm:bottom-[-70px] opacity-30 left-1/2 z-[-1]"
                src="/images/pawn.png"
                alt="pawn"
              />
            </div>

            <span className="flex px-9 sm:px-[82px] justify-center w-full text-center mt-3 text-[13px] sm:text-[17px]">
              Submit your email to get more updates from MoveChess.com
            </span>
            <div className="flex px-9 sm:px-[82px] justify-center mb-6 mt-3">
              <div className="relative sm:w-3/4 w-full text-[12px] sm:text-[17px]">
                <input
                  className="items-center rounded-full p-2 sm:p-4 pl-10 w-full "
                  type="text"
                  placeholder="Your Email..."
                />
                <button className=" absolute rounded-full  p-1 sm:p-3 w-[50px] sm:w-[100px] h-[25px] sm:h-[50px]  m-[4px] sm:m-[3px] bg-[#000000] right-0">
                  I'm In
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LandingPage
