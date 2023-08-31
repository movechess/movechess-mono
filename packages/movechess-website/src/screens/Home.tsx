import axios from "axios"
import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "../app/hooks"
import { setToast } from "../components/Toast/toastReducer"
import FirstSection from "./First-Section";

type Inputs = {
  email: string
}

const Home: React.FC = () => {
  const recaptchaRef = React.createRef()

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const recaptchaValue = (recaptchaRef?.current as any).getValue()

    if (!data.email) {
      dispatch(
        setToast({
          show: true,
          title: "",
          message: "Email is required",
          type: "error",
        }),
      )

      return
    }

    if (!recaptchaValue) {
      dispatch(
        setToast({
          show: true,
          title: "",
          message: "Captcha is required",
          type: "error",
        }),
      )

      return
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/waitlist`, {
        email: data.email,
        key: recaptchaValue,
      })
      if (res.data.code === 1) {
        dispatch(
          setToast({
            show: true,
            title: "",
            message: "Joined success",
            type: "success",
          }),
        )
      } else {
        dispatch(
          setToast({
            show: true,
            title: "",
            message: res.data?.status,
            type: "error",
          }),
        )
      }
    } catch (error) {
      dispatch(
        setToast({
          show: true,
          title: "",
          message: (error as any)?.response?.data?.status || "Server Error",
          type: "error",
        }),
      )
    }

    ;(window as any).grecaptcha.reset()
  }

  return (
    <>
      <FirstSection />
      {/*<div className="home">*/}
      {/*  <div className="logo">*/}
      {/*    <a href="/">*/}
      {/*      /!* <img src="/images/hey-logo.png" alt="Hey Logo" /> *!/*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <div className="text-[30px] lg:text-[48px] underline uppercase text-center pt-[32px] lg:pt-[103px]">*/}
      {/*      EARLY ACCESS*/}
      {/*    </div>*/}
      {/*    <div className="text-[26px] lg:text-[40px] text-center text-[#EEC5CF]">*/}
      {/*      /!* The innovation of social networking platform on Web3 *!/*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="mt-[40px] lg:mt-[98px] text-[60px] lg:text-[128px] text-center font-bold font-title text-[#EEC5CF]">*/}
      {/*    MoveChess! is coming*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*      <div className="text-center mt-[18px] text-[20px] lg:text-[40px]">*/}
      {/*        Enter your email below to join the waitlist*/}
      {/*      </div>*/}
      {/*      <div className="flex items-center justify-center mt-[30px] lg:mt-[67px]">*/}
      {/*        <input*/}
      {/*          type="email"*/}
      {/*          placeholder="satoshi@bitcoin.com"*/}
      {/*          className="bg-[#0C0F14] border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default max-w-[345px] border-[#929292]"*/}
      {/*          {...register("email")}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      <div className="flex items-center justify-center mt-[16px]">*/}
      {/*        <ReCAPTCHA*/}
      {/*          ref={recaptchaRef as any}*/}
      {/*          sitekey="6Lf2bd0nAAAAAN3jroLJaOJLm1bcKlOKWK0DeFhQ"*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      <div className="text-center mt-[30px]">*/}
      {/*        <button*/}
      {/*          className="uppercase text-[18px] join font-bold"*/}
      {/*          type="submit"*/}
      {/*        >*/}
      {/*          Join Waitlist*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </form>*/}
      {/*  </div>*/}

      {/*  <div className="text-center text-[16px] mt-[84px] terms">*/}
      {/*    By clicking on “Join waitlist”, you agree to receive marketing*/}
      {/*    communications from MoveChess!. <br />*/}
      {/*    Please refer to our <span className="underline">*/}
      {/*      Privacy Policy*/}
      {/*    </span>{" "}*/}
      {/*    for any questions.*/}
      {/*  </div>*/}

      {/*  <div className="profile">*/}
      {/*    /!* <a*/}
      {/*      href="https://www.erc4337.io/"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <img src="/images/profile.svg" alt="Profile" />*/}
      {/*    </a> *!/*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* <div className="root-bg"></div> */}
      <section className="flex flex-col">
        <div className="flex w-[600px] ml-auto mr-auto">
          <img
            className="opacity-30"
            src="/images/move-chess-knight.png"
            width={190}
            height={423}
            alt=""
          />
        </div>
        <span className="flex justify-center text-5xl mt-[100px]">
          Get More Updates
        </span>
        <span className="flex justify-center mt-3">
          Submit your email to get more updates from MoveChess.com
        </span>
        <div className="flex justify-center mb-6 mt-3">
          <div className="relative w-3/4">
            <input
              className="items-center rounded-full p-4 pl-10 w-full"
              type="text"
              placeholder="Your Email..."
            />
            <button className=" absolute rounded-full p-3 bg-[#000000] w-[100px] h-[50px] right-0 m-[3px]">
              I’m In
            </button>
          </div>
        </div>
        <div className="border-b flex justify-center ml-[82px] mr-[82px]"></div>
      </section>
    </>
  )
}

export default Home
