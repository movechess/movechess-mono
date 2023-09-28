const Slogan: React.FC = () => {
  return (
    <>
      <div className="relative lg:fixed w-full lg:w-1/2 h-fit md:h-full max-w-[1536px] lg:max-w-[768px] lg:ml-12 xl:ml-28">
        <div className="px-9 md:px-32 lg:px-16 py-24 md:py-32 w-full h-full">
          <div className="shrink-0">
            <img className="w-20" src={"/images/Logo.svg"} alt="logo" />
          </div>
          <div className="text-5xl md:text-6xl font-bold mt-24 md:mt-32">
            <p className="mb-5">MoveChess, </p>
            <p className="mb-5">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86E9FF] to-[#B3FF77]">
                Brilliant
              </span>
            </p>
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B3FF77] to-[#86E9FF]">
                Moves
              </span>{" "}
              Begin
            </p>
          </div>
          <div className="text-lg md:text-xl md:w-10/12 lg:w-7/12 mt-9">
            <p className="opacity-60 tracking-wider">
              Unleash your strategy, perfect your play, and rise to chess
              mastery
            </p>
          </div>
          <div className="mt-9">
            <button className="flex items-center space-x-2 bg-[#B3FF77] hover:bg-[#83ca4c] text-black px-5 py-3 rounded-full">
              <img
                className="h-6 md:h-6 w-auto"
                src={"/images/discord-logo-black.png"}
                alt="icon"
              />
              <span className="font-bold text-sm md:text-lg">
                JOIN OUR DISCORD
              </span>
            </button>
          </div>
          <div className="mt-20 text-lg">
            <a className="mr-5 cursor-pointer">Team</a>
            <a className="mr-5 cursor-pointer">ChessPapers</a>
            <a className="cursor-pointer">Activities</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slogan
