import React from "react"
interface RoadMapItemProps {
  title: string
  content: string
}
const RoadMapItem: React.FC<RoadMapItemProps> = ({ title, content }) => {
  return (
    <div className="flex p-[25px] justify-between items-center self-stretch rounded-[15px] bg-[linear-gradient(0deg,_#292929_0%,_rgba(96,_96,_96,_0.00)_100%)] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[2px]">
      <div className="flex w-[200px] h-[200px] justify-center items-center gap-[10px] bg-[#FFF]"></div>
      <div className="flex 2xl:w-[950px] w-[570px] 2xl:px-[25px] py-0 flex-col justify-center items-start gap-[10px]">
        <p className="text-[#FFF] font-[AmstelvarAlpha] 2xl:text-[56px] text-[40px] not-italic font-normal leading-[normal] uppercase">
          {title}
        </p>
        <p className="text-[#FFF] text-justify font-[Assistant] 2xl:text-[20px] text-[16px] not-italic font-normal leading-[normal] self-stretch">
          {content}
        </p>
      </div>
    </div>
  )
}
export default RoadMapItem
