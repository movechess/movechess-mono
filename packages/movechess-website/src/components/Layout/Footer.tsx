const Footer: React.FC = () => {
  return (
    <footer className="mt-5 px-9 sm:px-[82px]">
      <div>
        <img
          className="w-[65px] sm:w-[105px] sm:h-[74px]"
          src={"/images/move-chess-logo.png"}
          alt="abc"
        />
      </div>
      <div className="mt-6 text-[12px] sm:text-[17px]">
        <p className="break-words">
          MoveChess, the inaugural chess platform on the blockchain ecosystem.
        </p>
        <p className="break-words mt-2">
          An arena for users to indulge in intellectual gaming entertainment.
        </p>
      </div>
      <div className=" mt-[25px] sm:mt-[70px]">
        <img
          className="w-16 sm:w-20 md:w-24 lg:w-28"
          src={"/images/social-icon.png"}
          alt="icon"
        />
      </div>
    </footer>
  )
}
export default Footer
