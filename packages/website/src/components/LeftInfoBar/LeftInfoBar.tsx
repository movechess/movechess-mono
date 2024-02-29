import CrownIcon from "../../images/crown.svg"
import UserGroupIcon from "../../images/user-group.svg"
const LeftInfoBar: React.FC = () => {
  return (
    <div className="fixed top-0 h-full w-1/3 max-w-[500px] p-[25px] flex flex-col justify-between bg-[linear-gradient(135deg,_#2b323c_0%,_#12243b_100%)]">
      <div className="text-white text-center uppercase">
        <div className="flex justify-center items-center gap-[20px] mt-3">
          <img
            className="w-[35px] h-[35px] flex-shrink-0 mb-2"
            src={CrownIcon}
            alt="CrownIcon"
          />
          <span className="text-[#FFF] text-center font-[AmstelvarAlpha] text-[36px] not-italic font-normal leading-[normal] uppercase">
            MOVE CHESS
          </span>
        </div>
      </div>
      <div>
        <p className="text-[#DFDFDF] text-[44px] not-italic font-light leading-[normal]">NFT AIRDROP 1</p>
        <p className="text-[#62D1E4] text-[18px] not-italic font-light leading-[normal]">
          05:23:05:01
        </p>
        <p className="text-[14px] text-justify text-[#CBCBCB] not-italic font-light">
          Embark on an electrifying journey with MoveChess as we unveil our
          inaugural Airdrop, featuring an exclusive chess skin NFT. To secure
          your claim to this unique piece of MoveChess history: connect with the
          pulse of our community by joining our Discord server and embracing a
          designated role, follow us on Twitter, fortify your connection to our
          world by signing up with your email, and link your crypto wallet as
          the key to this trustless realm. This is your gateway to not just an
          NFT skin, but to becoming a part of a revolutionary chess experience
          where technology meets tradition in a trustless tournament play.{" "}
        </p>
      </div>
      <div className="box">
        <div className="flex p-[5px] items-start gap-[10px] bg-[linear-gradient(108deg,_rgba(255,_255,_255,_0.10)_0%,_rgba(255,_255,_255,_0.00)_100%)]">
          <p className="text-[#C5C5C5] font-[Assistant] text-[14px] not-italic font-semibold leading-[normal] cursor-pointer">
            Button Place Holder
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#FFF] text-[30px] not-italic font-light leading-[normal]">
          Place Holder Text
        </p>
        <p className="text-[#929292] text-[18px] not-italic font-light leading-[normal]">
          HOW TO CLAIM
        </p>
        <div className="flex items-start self-stretch bg-[linear-gradient(120deg,_rgba(255,_255,_255,_0.10)_11.38%,_rgba(255,_255,_255,_0.00)_100.78%)]">
          <div className="flex flex-col gap-y-5 justify-between h-full w-[45%] p-5">
            <div className="flex gap-x-5">
              <img
                className="w-[16px] h-[16px]"
                src={UserGroupIcon}
                alt="UserGroupIcon"
              />
              <div className="flex flex-col gap-y-3">
                <p className="text-[#E4E4E4] text-[18px] not-italic font-light leading-[normal]">
                  Place Holder
                </p>
                <p className="text-[#E4E4E4] font-[Assistant] text-[12px] not-italic font-normal leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <img
                className="w-[16px] h-[16px]"
                src={UserGroupIcon}
                alt="UserGroupIcon"
              />
              <div className="flex flex-col gap-y-3">
                <p className="text-[#E4E4E4] text-[18px] not-italic font-light leading-[normal]">
                  Place Holder
                </p>
                <p className="text-[#E4E4E4] font-[Assistant] text-[12px] not-italic font-normal leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 justify-between h-full w-[55%] py-5 px-12 border-x-2 border-[#3f4650]">
            <div className="flex gap-x-5">
              <img
                className="w-[16px] h-[16px]"
                src={UserGroupIcon}
                alt="UserGroupIcon"
              />
              <div className="flex flex-col gap-y-3">
                <p className="text-[#E4E4E4] text-[18px] not-italic font-light leading-[normal]">
                  Place Holder
                </p>
                <p className="text-[#E4E4E4] font-[Assistant] text-[12px] not-italic font-normal leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <img
                className="w-[16px] h-[16px]"
                src={UserGroupIcon}
                alt="UserGroupIcon"
              />
              <div className="flex flex-col gap-y-3">
                <p className="text-[#E4E4E4] text-[18px] not-italic font-light leading-[normal]">
                  Place Holder
                </p>
                <p className="text-[#E4E4E4] font-[Assistant] text-[12px] not-italic font-normal leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#FFF] text-[18px] not-italic font-light leading-[normal]">
          CONNECT WITH US
        </p>
        <div className="flex justify-start items-center gap-[15px]">
          <div className="rounded-[8px] bg-[#FFF] w-[45px] h-[45px]">
          </div>
          <div className="rounded-[8px] bg-[#FFF] w-[45px] h-[45px]">
          </div>
          <div className="rounded-[8px] bg-[#FFF] w-[45px] h-[45px]">
          </div>
          <div className="rounded-[8px] bg-[#FFF] w-[45px] h-[45px]">
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftInfoBar
