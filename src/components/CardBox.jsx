import { CornerDownRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CardBox() {
  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="bg-[#0A1319] border-b-4 px-6 py-5 border-greens">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Optimized Frameworks</h3>
          <p className=" opacity-60">
            A custom environment designed especially for developing and
            facilitating React, Vue, Angular, and other.
          </p>

          <Link
            to={""}
            className="uppercase opacity-80 flex gap-3 items-center"
          >
            read more <CornerDownRightIcon />
          </Link>
        </div>
      </div>

      <div className="px-6 py-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Integrated with GitHub</h3>
          <p className=" opacity-60">
            Import and run GitHub repositories directly. Alternatively, you can
            commit your source code to a repository.
          </p>

          <Link
            to={""}
            className="uppercase opacity-80 flex gap-3 items-center"
          >
            read more <CornerDownRightIcon />
          </Link>
        </div>
      </div>

      <div>
        <Link to={"/"} className="uppercase flex gap-2 opacity-70">
          explore more services <CornerDownRightIcon />
        </Link>
      </div>
    </div>
  );
}