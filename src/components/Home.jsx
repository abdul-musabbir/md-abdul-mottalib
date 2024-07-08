import { Video } from "lucide-react";
import Frame from "../assets/img/frame.svg";
import Logo1 from "../assets/img/logo1.svg";
import Logo2 from "../assets/img/logo2.svg";
import Logo3 from "../assets/img/logo3.svg";
import Logo4 from "../assets/img/logo4.svg";
import Logo5 from "../assets/img/logo5.svg";
import Button from "../utils/Button";
import DevelopSection from "./DevelopSection";
export default function Home() {
  return (
    <div className="py-10">
      <div className="flex mx-auto w-11/12 flex-col">
        <div className="flex flex-col gap-10 h-96 justify-center">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-medium text-3xl">
                Expert Developers for a Connected{" "}
                <span className="text-greens ibm-plex-mono">{"{Worlds}"}</span>
              </h1>
            </div>

            <div>
              <Button className={"uppercase bg-[#1C2012] py-3 px-6"}>
                get a demo
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <Button
              className={
                "flex gap-3 bg-greens text-black py-3 px-6 font-medium"
              }
            >
              <Video />
              <span className="uppercase">watch a video</span>
            </Button>

            <p className="">
              Circle is a code develoment platform that gives innovatirs the
              speed and reliability they need to create at the speed of
              inspiration
            </p>
          </div>
        </div>

        <div className="my-10">
          <img src={Frame} alt="frame" className="w-full" />
        </div>

        <div className="flex flex-col gap-10 py-5">
          <div>
            <p className=" uppercase opacity-60 text-center">
              Providing power to the {"world's"}best product teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div>
              <img src={Logo1} alt="" />
            </div>
            <div>
              <img src={Logo2} alt="" />
            </div>
            <div>
              <img src={Logo3} alt="" />
            </div>
            <div>
              <img src={Logo4} alt="" />
            </div>
            <div>
              <img src={Logo5} alt="" />
            </div>
          </div>
        </div>

        <div>
          <DevelopSection />
        </div>
      </div>
    </div>
  );
}
