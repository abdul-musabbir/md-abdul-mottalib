import { CornerDownRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CardBox() {
  return (
    <div className="flex flex-col gap-10 md:gap-6 md:grid md:grid-cols-2">
      <div className="bg-[#0A1319] border-b-4 px-6 py-5 border-greens">
        <div className="flex flex-col gap-2 xl:gap-6">
          <h3 className="text-2xl font-bold xl:text-3xl">
            Optimized Frameworks
          </h3>
          <p className=" opacity-60 lg:text-lg">
            A custom environment designed especially for developing and
            facilitating React, Vue, Angular, and other.
          </p>

          <Link
            to={""}
            className="uppercase opacity-80 flex gap-3 items-center lg:text-sm"
          >
            read more <CornerDownRightIcon />
          </Link>
        </div>
      </div>

      <div className="px-6 py-5">
        <div className="flex flex-col gap-2 xl:gap-6">
          <h3 className="text-2xl font-bold xl:text-3xl">
            Integrated with GitHub
          </h3>
          <p className=" opacity-60 lg:text-lg">
            Import and run GitHub repositories directly. Alternatively, you can
            commit your source code to a repository.
          </p>

          <Link
            to={""}
            className="uppercase opacity-80 flex gap-3 items-center lg:text-sm"
          >
            read more <CornerDownRightIcon />
          </Link>
        </div>
      </div>

      <div className="xl:mt-8">
        <Link to={"/"} className="uppercase flex gap-2 opacity-70 lg:text-sm">
          explore more services <CornerDownRightIcon />
        </Link>
      </div>
    </div>
  );
}
