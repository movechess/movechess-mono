import React from "react"
import ChessBoardHero from "../../images/chess-board-hero.png"
import Information from "../Information/Information";

const RightSection: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-2/3">
      <img className="float-right" src={ChessBoardHero} alt="ChessBoardHero" />
      <Information></Information>
    </div>
  )
}
export default RightSection
