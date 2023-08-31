const Footer: React.FC = () => {
  return (
    <footer className="mt-5 pl-5 pb-[82px] md:pl-[82px]">
      <div>
        <img
          src={"images/move-chess-logo.png"}
          width={105}
          height={74}
          alt="abc"
        />
      </div>
      <div className="mt-6">
        <p className="break-words">
          MoveChess, the inaugural chess platform on the blockchain ecosystem.{" "}
        </p>
        <p className="break-words mt-2">
          An arena for users to indulge in intellectual gaming entertainment.
        </p>
      </div>
      <div className="mt-[70px]">
        <img
          src={"/images/social-icon.png"}
          width={340}
          height={35}
          alt="icon"
        />
      </div>
    </footer>
  )
}
export default Footer
