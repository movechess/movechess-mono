import React from "react"
import AboutItem from "./AboutItem"

const AboutSite: React.FC = () => {
  return (
    <div className="flex p-[50px] justify-between items-center self-stretch bg-[linear-gradient(0deg,_#171B1F_0%,_rgba(30,_38,_48,_0.00)_100%)]">
      <AboutItem
        title={"Tournaments"}
        content={
          "Earn more than just bragging rights by competing in tournaments where checkmate means real world prize payouts."
        }
        imageUrl={"/images/trophy-card.png"}
      ></AboutItem>
      <AboutItem
        title={"NFT SKins"}
        content={
          "Personalize your chessboard and pieces showcasing your unique style and adding vibrancy to every game."
        }
        imageUrl={"/images/nft-card.png"}
      ></AboutItem>
      <AboutItem
        title={"Education"}
        content={
          "Unlock the potential of Web3 and earn NFTs and blockchain rewards simply by playing the chess you know and love."
        }
        imageUrl={"/images/education-card.png"}
      ></AboutItem>
    </div>
  )
}
export default AboutSite
