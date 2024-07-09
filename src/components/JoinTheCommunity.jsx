import { CornerDownRight } from "lucide-react";
import Button from "../utils/Button";
export default function JoinTheCommunity() {
  return (
    <div className="">
      <div className="bg-[#12181D] px-6 py-10 border-b-4 border-b-greens">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl text-center font-medium xl:text-4xl">
              Join the{" "}
              <span className="ibm-plex-mono text-greens">
                {"{community}"}{" "}
              </span>{" "}
              around the world
            </h2>
          </div>
          <div>
            <p className="opacity-60 xl:text-xl">
              A custom environment designed especially for developing and
              facilitating React, Vue, Angular, and other.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button className={"flex gap-2 uppercase opacity-65"}>
            <span>join community</span>
            <CornerDownRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
