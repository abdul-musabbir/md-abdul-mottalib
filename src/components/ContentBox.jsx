import { CornerDownRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContentBox(props) {
  const { data } = props;
  return (
    <div className="flex flex-col gap-20">
      {data.map((res, index) => {
        return (
          <div
            key={index}
            className="overflow-hidden flex flex-col gap-4 bg px-5"
          >
            {" "}
            <h3 className="text-xl font-medium">{res.title}</h3>
            <p className=" opacity-65">{res.des}</p>
            <Link to={res.link} className=" opacity-70 uppercase flex gap-2">
              read more <CornerDownRightIcon />
            </Link>
            <div className="w-full flex items-center mt-8">
              <img src={res.url} alt="" className="w-72 -mb-4 mx-auto" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
