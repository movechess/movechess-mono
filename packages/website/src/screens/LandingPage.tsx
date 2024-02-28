import UserIcon from "../images/user.svg"
const LandingPage: React.FC = () => {
  const headerStyle = {
    display: "flex",
    height: "75px",
    padding: "0px 25px",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "25px",
    alignSelf: "stretch",
    background: "linear-gradient(90deg, #132233 0%, #222B3A 100%)",
  }
  const headerItemStyle = {
    color: "#B9C0C4",
    textAlign: "center",
    fontFamily: "Assistant",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "normal",
    cursor: "pointer",
  }
  const userIconStyle = {
    display: "flex",
    padding: "5px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    background: "#465465",
    cursor: "pointer",
  }
  return (
    <div className="w-screen h-screen mx-auto">
      <div style={headerStyle}>
        <a style={headerItemStyle}>CRYPTO</a>
        <a style={headerItemStyle}>ABOUT</a>
        <a style={headerItemStyle}>ROADMAP</a>
        <a style={headerItemStyle}>TEAM</a>
        <div style={userIconStyle}>
          <img src={UserIcon} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
