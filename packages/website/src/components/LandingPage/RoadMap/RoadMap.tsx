import React from "react"
import RoadMapItem from "./RoadMapItem"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"

const RoadMap: React.FC = () => {
  return (
      <>
        <div name="road-map"
            className="lg:flex hidden px-[80px] py-0 flex-col justify-center items-start 2xl:gap-[80px] gap-[40px] self-stretch rounded-[15px]">
          <div className="flex px-[20px] py-0 justify-center items-center gap-[10px] self-stretch">
            <p className="text-[#535353] font-[Assistant] 2xl:text-[64px] text-[52px] not-italic font-light leading-[normal] opacity-75">
              ROAD MAP
            </p>
          </div>
          <RoadMapItem
              title={"INAUGURAL TOURNAMENT"}
              content={
                  "Embark on an unparalleled chess odyssey with MoveChess, as we\n" +
                  "            proudly announce our first-ever in-person tournament, set against\n" +
                  "            the vibrant backdrop of Vietnam. This landmark event marks the\n" +
                  "            beginning of a new era in chess, where tradition and innovation\n" +
                  "            converge on the digital frontier."
              }
              imageUrl={"/images/trophy.svg"}
          />
          <RoadMapItem
              title={"Free Game Analyze Tool"}
              content={
                  "MoveChess is thrilled to offer early adopters an exclusive,\n" +
                  "            complimentary chess analysis tool designed to elevate their game to\n" +
                  "            new heights. This cutting-edge feature empowers players to refine\n" +
                  "            their strategies, identify strengths and weaknesses, and advance\n" +
                  "            their skills on the chessboard with precision and insight."
              }
              imageUrl={"/images/analyze.svg"}
          />
          <RoadMapItem
              title={"Cross Play"}
              content={
                  "MoveChess is pioneering the future of online chess with our\n" +
                  "            groundbreaking cross-play feature, bridging the realms of Web 2 and\n" +
                  "            Web 3 gaming. This innovative capability allows chess enthusiasts\n" +
                  "            from traditional Web 2 platforms to compete seamlessly against their\n" +
                  "            counterparts on the Web 3 blockchain, ensuring that everyone can\n" +
                  "            join the fray, regardless of their familiarity with blockchain\n" +
                  "            technology."
              }
              imageUrl={"/images/cross-play.svg"}
          />
          <RoadMapItem
              title={"Design To Earn Skin Store"}
              content={
                  'MoveChess introduces the revolutionary "Design to Earn" skin store,\n' +
                  "            a digital marketplace where artists can unleash their creativity by\n" +
                  "            crafting and selling exclusive chess skins as limited-run NFTs. This\n" +
                  "            platform not only provides chess enthusiasts with the opportunity to\n" +
                  "            personalize their game with unique, artistic skins but also opens a\n" +
                  "            new revenue stream for talented creators worldwide."
              }
              imageUrl={"/images/design-ern.svg"}
          />
        </div>
        <div className="lg:!hidden flex px-[20px] py-0 justify-center items-center self-stretch">
          <p className="text-[#535353] font-[Assistant] md:text-[52px] text-[32px] not-italic font-light leading-[normal] opacity-75">
            ROAD MAP
          </p>
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
              // 769: {
              //   slidesPerView: 1.2,
              //   spaceBetween: 10,
              // },
              835: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
            }}
            className="h-full w-full lg:!hidden"
            style={{
              "--swiper-pagination-bullet-inactive-color": "#999999",
            }}
        >
          <SwiperSlide className="!pt-0">
            <RoadMapItem
                title={"INAUGURAL TOURNAMENT"}
                content={
                    "Embark on an unparalleled chess odyssey with MoveChess, as we\n" +
                    "            proudly announce our first-ever in-person tournament, set against\n" +
                    "            the vibrant backdrop of Vietnam. This landmark event marks the\n" +
                    "            beginning of a new era in chess, where tradition and innovation\n" +
                    "            converge on the digital frontier."
                }
                imageUrl={"/images/trophy.svg"}
            />
          </SwiperSlide>
          <SwiperSlide className="!pt-0">
            <RoadMapItem
                title={"Free Game Analyze Tool"}
                content={
                    "MoveChess is thrilled to offer early adopters an exclusive,\n" +
                    "            complimentary chess analysis tool designed to elevate their game to\n" +
                    "            new heights. This cutting-edge feature empowers players to refine\n" +
                    "            their strategies, identify strengths and weaknesses, and advance\n" +
                    "            their skills on the chessboard with precision and insight."
                }
                imageUrl={"/images/analyze.svg"}
            />
          </SwiperSlide>
            <SwiperSlide className="!pt-0">
                <RoadMapItem
                    title={"Cross Play"}
                    content={
                        "MoveChess is pioneering the future of online chess with our\n" +
                        "            groundbreaking cross-play feature, bridging the realms of Web 2 and\n" +
                        "            Web 3 gaming. This innovative capability allows chess enthusiasts\n" +
                        "            from traditional Web 2 platforms to compete seamlessly against their\n" +
                        "            counterparts on the Web 3 blockchain, ensuring that everyone can\n" +
                        "            join the fray, regardless of their familiarity with blockchain\n" +
                        "            technology."
                    }
                    imageUrl={"/images/cross-play.svg"}
                />
            </SwiperSlide>
          <SwiperSlide className="!pt-0">
            <RoadMapItem
                title={"Design To Earn Skin Store"}
                content={
                    'MoveChess introduces the revolutionary "Design to Earn" skin store,\n' +
                    "            a digital marketplace where artists can unleash their creativity by\n" +
                    "            crafting and selling exclusive chess skins as limited-run NFTs. This\n" +
                    "            platform not only provides chess enthusiasts with the opportunity to\n" +
                    "            personalize their game with unique, artistic skins but also opens a\n" +
                    "            new revenue stream for talented creators worldwide."
                }
                imageUrl={"/images/design-ern.svg"}
            />
          </SwiperSlide>
        </Swiper>
      </>
  )
}
export default RoadMap
