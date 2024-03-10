import React from "react"
import FeatureCard from "./FeatureCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"

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
        className="h-full w-full lg:!hidden bg-[linear-gradient(0deg,_#171B1F_0%,_rgba(30,_38,_48,_0.00)_100%)]"
        style={{
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
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
