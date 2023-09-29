import React from "react"
import { DiscordAlt } from "@styled-icons/boxicons-logos"

const Hero: React.FC = () => {
  return (
    <div className="hero flex flex-col justify-between h-full gap-[60px]">
      <div className="logo-container">
        <a href="/">
          <img src="/images/Logo.svg" alt="logo" height={43} />
        </a>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="text-[60px] font-[600] leading-[72px]">
          MoveChess,
          <br />
          Where{" "}
          <span className="gradiant">
            Brilliant <br /> Moves
          </span>{" "}
          Begin
        </div>
        <div className="text-[23px] leading-[30.36px] opacity-60">
          Unleash your strategy, perfect your <br />
          play, and rise to chess mastery
        </div>
        <div>
          <a
            className="bg-[#B3FF77] px-[24px] py-[18px] rounded-[62px] text-black uppercase text-[18px] font-[700] tracking-widest flex items-center justify-between gap-[10px] max-w-[282px]"
            href="https://discord.com/invite/movechess"
            target="_blank"
          >
            <DiscordAlt size={26.4} /> Join our discord
          </a>
        </div>
      </div>
      <div className="footer flex gap-[36px]">
        <a href="/">Team</a>
        <a href="/">ChessPapers</a>
        <a href="/">Activities</a>
      </div>
    </div>
  )
}

export default Hero
