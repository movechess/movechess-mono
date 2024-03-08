import React from "react"

interface AboutItemProps {
  title: string
  content: string
  imageUrl: string
}
const FeatureCard: React.FC<AboutItemProps> = ({ title, content, imageUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex 2xl:w-[420px] 2xl:h-[527px] w-[300px] h-[450px] min-w-[300px] flex-col justify-end items-center rounded-[15px] bg-contain`}
    >
      <div className="flex px-[10px] py-[20px] justify-center items-center gap-[10px] self-stretch rounded-tl-[15px] rounded-br-none rounded-tr-[15px] rounded-bl-none bg-[linear-gradient(0deg,_#000_0%,_rgba(0,_0,_0,_0.45)_100%)] backdrop-filter backdrop-blur-[2px]">
        <p className="text-[#FFF] font-[AmstelvarAlpha] 2xl:text-[36px] text-[24px] not-italic font-normal leading-[normal] uppercase">
          {title}
        </p>
      </div>
      <div className="flex h-[150px] 2xl:px-[50px] p-[25px] justify-center items-start gap-[10px] flex-shrink-0 self-stretch bg-[#000]">
        <p className="text-[#FFF] text-justify font-[Assistant] 2xl:text-[16px] text-[14px] not-italic font-normal leading-[normal] uppercase">
          {content}
        </p>
      </div>
    </div>
  )
}
export default FeatureCard
