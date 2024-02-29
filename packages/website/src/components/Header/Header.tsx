import UserIcon from "../../images/user.svg"
const Header: React.FC = () => {
  return (
    <div className="sticky top-[25px] flex h-[75px] px-[25px] py-0 justify-end items-center gap-[25px] self-stretch bg-[linear-gradient(90deg,_#132233_0%,_#222B3A_100%)]">
      <a
        className="text-[#B9C0C4] font-[Assistant] text-[18px] not-italic font-light leading-[normal] cursor-pointer"
        href="/2"
      >
        CRYPTO
      </a>
      <a
        className="text-[#B9C0C4] font-[Assistant] text-[18px] not-italic font-light leading-[normal] cursor-pointer"
        href="/2"
      >
        ABOUT
      </a>
      <a
        className="text-[#B9C0C4] font-[Assistant] text-[18px] not-italic font-light leading-[normal] cursor-pointer"
        href="/2"
      >
        ROADMAP
      </a>
      <a
        className="text-[#B9C0C4] font-[Assistant] text-[18px] not-italic font-light leading-[normal] cursor-pointer"
        href="/2"
      >
        TEAM
      </a>
      <div className="flex p-[5px] justify-center items-center rounded-[4px] bg-[#465465] cursor-pointer">
        <img src={UserIcon} />
      </div>
    </div>
  )
}

export default Header
