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
      <div className="mt-6 text-sm sm:text-lg">
        <p className="break-words">
          MoveChess, the inaugural chess platform on the blockchain ecosystem.
        </p>
        <p className="break-words mt-2">
          An arena for users to indulge in intellectual gaming entertainment.
        </p>
      </div>
      <div className="flex mt-[25px] sm:mt-[70px]">
        <img
          className="max-h-[50px] h-6 md:h-8 w-auto"
          src={"/images/discord-logo.png"}
          alt="icon"
        />
        <img
          className="max-h-[50px] h-6 md:h-8 w-auto ml-10"
          src={"/images/twitter-logo.png"}
          alt="icon"
        />
        <img
          className="max-h-[50px] h-6 md:h-8 w-auto ml-10"
          src={"/images/instagram-logo.png"}
          alt="icon"
        />
        <img
          className="max-h-[50px] h-6 md:h-8 w-auto ml-10"
          src={"/images/youtube-logo.png"}
          alt="icon"
        />
      </div>
    </footer>
  )
}
export default Footer
