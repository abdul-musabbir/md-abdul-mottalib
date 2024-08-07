import Frame from "../assets/img/frame.svg";
import Logo1 from "../assets/img/logo1.svg";
import Logo2 from "../assets/img/logo2.svg";
import Logo3 from "../assets/img/logo3.svg";
import Logo4 from "../assets/img/logo4.svg";
import Logo5 from "../assets/img/logo5.svg";
import Button from "../utils/Button";
import CardBox from "./CardBox";
import CircleProvides from "./CircleProvides";
import Concentrate from "./Concentrate";
import DevelopSection from "./DevelopSection";
import Footer from "./Footer";
import JoinTheCommunity from "./JoinTheCommunity";
export default function Home() {
  return (
    <div className="sm:pt-0">
      <div className="flex mx-auto w-11/12 flex-col xl:w-[1200px]">
        <div className="flex flex-col h-96 sm:h-auto justify-center xl:mb-20 mt-10 lg:mt-16">
          <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center md:grid md:grid-cols-4">
            <div className="flex col-span-3">
              <h1 className="font-medium xl:leading-[5rem] text-3xl sm:text-4xl md:text-5xl xl:text-[70px]">
                Expert Developers for a Connected{" "}
                <span className="text-greens ibm-plex-mono">{"{Worlds}"}</span>
              </h1>
            </div>

            <div className="md:col-start-4 md:flex md:items-end md:justify-end">
              <div>
                <Button
                  className={
                    "uppercase bg-[#1C2012] sm:w-36 py-3 px-6 flex-row"
                  }
                >
                  get a demo
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:flex-row xl:gap-10 xl:mt-10 mt-10 gap-3">
            <div className="xl:inline-block">
              <Button
                className={
                  "flex md:flex gap-3 bg-greens text-black text-center py-2 font-medium shadows w-28 items-center justify-center"
                }
              >
                <span className="uppercase text-center">HIRE ME</span>
              </Button>
            </div>

            <p className="xl:text-xl">
              Circle is a code develoment platform that gives innovatirs the
              speed and reliability they need to create at the speed of
              inspiration
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <img src={Frame} alt="frame" className="w-full" />
        </div>

        <div className="flex flex-col xl:mb-20 gap-10 my-10">
          <div>
            <p className=" uppercase opacity-60 text-center">
              Providing power to the {"world's"}best product teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 flex-wrapitems-center justify-center">
            <div>
              <img src={Logo1} alt="" className="xl:w-full" />
            </div>
            <div>
              <img src={Logo2} alt="" className="xl:w-full" />
            </div>
            <div>
              <img src={Logo3} alt="" className="xl:w-full" />
            </div>
            <div>
              <img src={Logo4} alt="" className="xl:w-full" />
            </div>
            <div>
              <img src={Logo5} alt="" className="xl:w-full" />
            </div>
          </div>
        </div>

        <div className="xl:my-[50px] my-10 lg:py-7">
          <DevelopSection />
        </div>

        <div className="xl:my-[50px] my-10 lg:py-7">
          <CardBox />
        </div>

        <div className="xl:my-[50px] my-10 lg:py-7">
          <Concentrate />
        </div>

        <div className="xl:my-[50px] my-10 lg:py-7">
          <CircleProvides />
        </div>

        <div className="xl:mt-[50px] mt-10 mb-20 lg:py-7">
          <JoinTheCommunity />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

//  to={'/'}
