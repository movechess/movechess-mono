import React from "react"
interface RoadMapItemProps {
  title: string
  content: string
    imageUrl: string
}
const RoadMapItem: React.FC<RoadMapItemProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-0 md:gap-[10px] lg:w-full md:w-[654px] w-[370px] lg:h-full md:h-[432px] h-[400px] p-[25px] xl:px-[50px] lg:justify-between justify-start items-center self-stretch rounded-[15px] bg-[linear-gradient(0deg,_#292929_0%,_rgba(96,_96,_96,_0.00)_100%)] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[2px]">
      <div className="flex w-[150px] justify-center items-center gap-[10px]">
          <img src={imageUrl}/>
      </div>
      <div className="flex 2xl:w-[950px] md:w-[570px] w-[300px] 2xl:px-[25px] py-0 lg:pt-0 md:pt-[20px] pt-[10px] flex-col justify-center lg:items-start items-center gap-[10px]">
        <p className="text-[#FFF] font-[AmstelvarAlpha] 2xl:text-[56px] md:text-[40px] text-[20px] not-italic font-normal leading-[normal] uppercase">
          {title}
        </p>
        <p className="text-[#FFF] text-justify font-[Assistant] 2xl:text-[20px] md:text-[16px] text-[12px] not-italic font-normal leading-[normal] self-stretch">
          {content}
        </p>
      </div>
    </div>
  )
}
export default RoadMapItem
