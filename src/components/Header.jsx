import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "../lib/cn";
import Button from "../utils/Button";

export default function Header() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [drop, setDrop] = useState(false);
  return (
    <div className="py-2 lg:py-4 sticky top-0 left-0 right-0 z-50">
      <div className="flex w-11/12 mx-auto bg-[#0f1206] h-20 xl:w-[1200px]">
        <div className="mx-auto flex w-11/12 justify-between items-center">
          <div>
            <p className="font-bold text-xl">
              <span className="text-[#84EC8E]">Md Abdul </span>
              <span className="ibm-plex-mono text-white font-normal">
                Mottalib
              </span>
            </p>
          </div>

          <div className="md:hidden">
            <Button className={""} onClick={() => setDrop(!drop)}>
              {drop ? (
                <X className="text-white size-10" />
              ) : (
                <Menu className="text-white size-10" />
              )}
            </Button>
          </div>

          <div
            className={cn(
              "absolute left-0 top-28 w-full md:block md:w-auto md:relative md:top-0 md:left-0",
              {
                " hidden": !drop,
              }
            )}
          >
            <div className="text-white w-4/5 md:w-full flex flex-col mx-auto text-center gap-4 py-8 bg-[#03090e] md:bg-inherit rounded-2xl md:flex-row md:rounded-none">
              <Link to={"/"} className="uppercase font-medium">
                how it works?
              </Link>
              <Link to={"/"} className="uppercase font-medium">
                develop
              </Link>
              <Link to={"/"} className="uppercase font-medium">
                features
              </Link>
              <Link to={"/"} className="uppercase font-medium">
                docs
              </Link>
              <Link to={"/"} className="uppercase font-medium">
                blog
              </Link>
              <Link to={"/"} className="uppercase font-medium">
                about
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
