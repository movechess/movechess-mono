import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
interface AboutItemProps {
  title: string
  content: string
  imageUrl: string
}
const FeatureCard: React.FC<AboutItemProps> = ({
  title,
  content,
  imageUrl,
}) => {
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
const FeatureSection: React.FC = () => {
  return (
    <>
      <div className="lg:flex hidden justify-between items-center xl:p-[50px] lg:p-[20px] py-[50px] overflow-hidden self-stretch bg-[linear-gradient(0deg,_#171B1F_0%,_rgba(30,_38,_48,_0.00)_100%)]">
        <FeatureCard
          title={"Tournaments"}
          content={
            "Earn more than just bragging rights by competing in tournaments where checkmate means real world prize payouts."
          }
          imageUrl={"/images/trophy-card.png"}
        ></FeatureCard>
        <FeatureCard
          title={"NFT SKins"}
          content={
            "Personalize your chessboard and pieces showcasing your unique style and adding vibrancy to every game."
          }
          imageUrl={"/images/nft-card.png"}
        ></FeatureCard>
        <FeatureCard
          title={"Education"}
          content={
            "Unlock the potential of Web3 and earn NFTs and blockchain rewards simply by playing the chess you know and love."
          }
          imageUrl={"/images/education-card.png"}
        ></FeatureCard>
      </div>

      {/*Slider for small screen*/}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={true}
        modules={[FreeMode, Pagination]}
        initialSlide={0}
        breakpoints={{
          768: {
            slidesPerView: 2.3,
            initialSlide: 1,
            freeMode: true,
          },
        }}
        className="card-slider h-full w-full lg:!hidden bg-[linear-gradient(0deg,_#171B1F_0%,_rgba(30,_38,_48,_0.00)_100%)]"
      >
        <SwiperSlide>
          <FeatureCard
            title={"Tournaments"}
            content={
              "Earn more than just bragging rights by competing in tournaments where checkmate means real world prize payouts."
            }
            imageUrl={"/images/trophy-card.png"}
          ></FeatureCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard
            title={"NFT SKins"}
            content={
              "Personalize your chessboard and pieces showcasing your unique style and adding vibrancy to every game."
            }
            imageUrl={"/images/nft-card.png"}
          ></FeatureCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard
            title={"Education"}
            content={
              "Unlock the potential of Web3 and earn NFTs and blockchain rewards simply by playing the chess you know and love."
            }
            imageUrl={"/images/education-card.png"}
          ></FeatureCard>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default FeatureSection
