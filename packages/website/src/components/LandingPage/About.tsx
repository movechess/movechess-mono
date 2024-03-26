import React from "react"

const About: React.FC = () => {
  return (
    <div
      name="about"
      className="flex flex-col justify-center items-start 2xl:gap-[80px] gap-[40px] self-stretch rounded-[15px]"
    >
      <div className="flex md:px-[80px] px-[20px] py-0 justify-center items-center gap-[10px] self-stretch">
        <p className="text-[#535353] font-[Assistant] 2xl:text-[64px] md:text-[52px] text-[32px] not-italic font-light leading-[normal] uppercase opacity-75">
          About
        </p>
      </div>
      <div className="flex md:px-[80px] px-[20px] py-0 justify-center items-center gap-[10px] self-stretch">
        <p className="text-[#FFF] text-justify font-[Assistant] 2xl:text-[24px] md:text-[20px] text-[16px] not-italic font-light leading-[normal] opacity-75">
          Welcome to MoveChess, where the grand tradition of chess meets the
          cutting-edge innovation of Web 3 technology. At MoveChess, we're not
          just hosting online tournaments; we're revolutionizing the way you
          play, customize, and learn. Dive into tournament play that transcends
          the ordinary, powered by smart contracts to ensure transparency and
          fairness, all while offering a seamless competitive experience.
          Elevate your game with NFT skin customization for chess pieces,
          allowing you to not only personalize your board but also to own a
          piece of the game in a way never before possible. For our players
          stepping into the realm of blockchain and crypto for the first time,
          our Web 3 education initiative is here to guide you. From setting up
          your first digital wallet to earning and spending tokens, and even
          minting your own NFTs, our intuitive tutorials and UI are designed to
          seamlessly integrate you into the Web 3 space. Join MoveChess today
          and be part of the future of chess, where every move is an adventure
          into the new digital frontier.
        </p>
      </div>
    </div>
  )
}
export default About
