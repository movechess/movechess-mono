import CrownIcon from "../../images/crown.svg"
const LeftInfoBar: React.FC = () => {
  return (
    <div
      className="fixed top-0 h-full w-1/3 p-[25px] flex flex-col justify-between bg-[linear-gradient(135deg,_#2b323c_0%,_#12243b_100%)]"
    >
      <div className="text-white text-center uppercase">
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[35px] h-[35px] flex-shrink-0 mb-3"
            src={CrownIcon}
            alt="CrownIcon"
          />
          <span className="text-[36px] not-italic">MOVE CHESS</span>
        </div>
        <div className="text-[12px] not-italic">
          the future of trustless tournament play
        </div>
      </div>
      <div>
        <p className="text-[44px] not-italic font-light">NFT AIRDROP 1</p>
        <p className="text-[18px] text-[#62D1E4] not-italic font-light">
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
          <p className="text-[14px] text-[#C5C5C5] not-italic font-semibold">
            REGISTER
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default LeftInfoBar
