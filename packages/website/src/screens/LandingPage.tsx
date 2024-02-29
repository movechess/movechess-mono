import Header from "../components/Header/Header";
import LeftInfoBar from "../components/LeftInfoBar/LeftInfoBar";
const LandingPage: React.FC = () => {
  return (
    <div className="w-screen h-screen mx-auto">
      <Header></Header>
      <LeftInfoBar></LeftInfoBar>
    </div>
  )
}

export default LandingPage
