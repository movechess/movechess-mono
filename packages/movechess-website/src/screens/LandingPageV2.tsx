import Slogan from "../components/Layout/Slogan"

const LandingPageV2: React.FC = () => {
  return (
    <>
      <div className="md:flex justify-center ">
        <div className="max-w-[1536px] w-[1536px] h-screen min-w-[400px]">
          <Slogan></Slogan>
          <div className="md:w-1/2 float-right max-w-[768px] h-[1500px]">
            <div className="md:pr-16 lg:pr-24 md:pt-16 lg:pt-32 w-full h-full mb-3">
              <div className="bg-[#212325] w-[90%] md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5">
                <div className="shrink-0 flex justify-center mt-[10%]">
                  <img
                    className="w-[90px]"
                    src={"/images/queen-logo.png"}
                    alt="logo"
                  />
                </div>
                <div className="text-center px-28 mt-5">
                  <h1 className="text-[32px] font-bold">
                    Your Chess, Your Narrative
                  </h1>
                  <p className="text-[24px] mt-3 opacity-60 text-center">
                    Delve into a journey with bespoke pieces, face novel
                    challenges, and traverse a landscape where every move is a
                    reflection of you
                  </p>
                </div>
                <div className="shrink-0 flex justify-center">
                  <img
                    className="w-[300px]"
                    src={"/images/double-pawn.png"}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="bg-[#212325] w-[90%] md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5">
                <div className="shrink-0 flex justify-center mt-[10%]">
                  <img
                    className="w-[90px]"
                    src={"/images/knight-logo.png"}
                    alt="logo"
                  />
                </div>
                <div className="text-center px-24 mt-5">
                  <h1 className="text-[32px] font-bold">
                    Maximize Your Chess Mastery
                  </h1>
                  <p className="text-[24px] mt-3 opacity-60 text-center">
                    Train with our tools, solve complex puzzles, and analyze
                    deeply. Outplay rivals move by move
                  </p>
                </div>
                <div className="shrink-0 flex justify-center mt-5 ml-12">
                  <img
                    className="w-[300px]"
                    src={"/images/tactic-sheet.png"}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="bg-[#212325] w-[90%] md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5">
                <div className="shrink-0 flex justify-center mt-[10%]">
                  <img
                    className="w-[90px]"
                    src={"/images/rook-logo.png"}
                    alt="logo"
                  />
                </div>
                <div className="text-center px-24 mt-5">
                  <h1 className="text-[32px] font-bold">
                    Unlock Exclusive Rewards with In-Game NFTs
                  </h1>
                  <p className="text-[24px] mt-3 opacity-60 text-center">
                    Collect MoveChess NFTs and unlock unmatched rewards
                  </p>
                </div>
                <div className="shrink-0 flex justify-center mt-3 ml-9">
                  <img
                    className="w-[300px]"
                    src={"/images/knight-3d.png"}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="bg-[#212325] w-[90%] md:h-[30%] lg:h-[30%] float-right rounded-[30px] mb-5">
                <div className="shrink-0 flex justify-center mt-[10%]">
                  <img
                    className="w-[90px]"
                    src={"/images/king-logo.png"}
                    alt="logo"
                  />
                </div>
                <div className="text-center px-24 mt-5">
                  <h1 className="text-[32px] font-bold">Join our Discord</h1>
                  <p className="text-[24px] mt-3 opacity-60 text-center">
                    Where Chess Enthusiasts Connect
                  </p>
                </div>
                <div className="mt-9 flex justify-center">
                  <button className="flex items-center space-x-2 bg-[#B3FF77] hover:bg-[#83ca4c] text-black px-5 py-3 rounded-full">
                    <img
                      className="h-6 md:h-6 w-auto"
                      src={"/images/discord-logo-black.png"}
                      alt="icon"
                    />
                    <span className="font-bold text-lg">JOIN OUR DISCORD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPageV2
