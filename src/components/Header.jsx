import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "../lib/cn";
import Button from "../utils/Button";

export default function Header() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [drop, setDrop] = useState(false);
  return (
    <div className="py-4">
      <div className="flex w-11/12 mx-auto bg-[#0f1206] h-20">
        <div className="mx-auto flex w-11/12 justify-between items-center">
          <div>
            <p className="font-bold text-xl">
              <span className="text-[#84EC8E]">Md Abdul </span>
              <span className="ibm-plex-mono text-white font-normal">
                Mottalib
              </span>
            </p>
          </div>

          <div>
            <Button className={""} onClick={() => setDrop(!drop)}>
              <Menu className="text-white size-10" />
            </Button>
          </div>

          <div
            className={cn("absolute left-0 top-28 w-full", {
              " hidden ": !drop,
            })}
          >
            <div className="text-white w-4/5 flex flex-col mx-auto text-center gap-4 py-4">
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