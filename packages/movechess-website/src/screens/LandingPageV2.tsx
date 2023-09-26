import Slogan from "../components/Layout/Slogan"

const LandingPageV2: React.FC = () => {
  return (
    <>
      <div className="md:flex justify-center ">
        <div className="max-w-[1536px] w-[1536px] h-screen min-w-[400px]">
          <Slogan></Slogan>
          <div className="md:w-1/2 float-right max-w-[768px] h-[1500px]">
            <div className="md:pr-16 lg:pr-24 md:pt-16 lg:pt-32 w-full h-full mb-3">
              <div className="bg-[#212325] w-full md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5"></div>
              <div className="bg-[#212325] w-full md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5"></div>
              <div className="bg-[#212325] w-full md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5"></div>
              <div className="bg-[#212325] w-full md:h-[40%] lg:h-[50%] float-right rounded-[30px] mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPageV2
