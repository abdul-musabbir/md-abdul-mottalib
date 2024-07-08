import { Video } from "lucide-react";
import FrameBoard from "../assets/img/FrameBoard.svg";
import Button from "../utils/Button";
export default function CircleProvides() {
  return (
    <div className="py-10">
      <div>
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl">
            Circle provides teams and individuals with customizable{" "}
            <span className="text-greens text-center ibm-plex-mono">
              {"{management tools}"}{" "}
            </span>
            for your source code.
          </h2>

          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-10 opacity-65">
                Create issues, sections into tasks, track relationships, add
                custom spaces, and initiate discussions. Visualize large
                projects with spreadsheets or codeboards, and use the help of
                code systems to automate everything.
              </p>
              <div className="flex gap-5">
                <Button
                  className={
                    "flex gap-2 uppercase bg-greens text-black px-6 py-3 rounded-lg"
                  }
                >
                  <Video /> watch a video
                </Button>
                <Button
                  className={
                    "uppercase px-4 py-2 bg-green-950 text-white shadowses"
                  }
                >
                  get a demo
                </Button>
              </div>
            </div>

            <div>
              <img src={FrameBoard} alt="image" className=" -inset-8 -mr-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
