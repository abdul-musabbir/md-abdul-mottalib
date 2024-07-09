import BoxImage from "../assets/img/box.svg";
import CodeImage from "../assets/img/frame2.svg";
import ContentBox from "./ContentBox";
export default function Concentrate() {
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-center font-medium xl:text-4xl">
          Concentrate on{" "}
          <span className="ibm-plex-mono text-greens">{"{larger}"}</span>{" "}
          issues.
        </h2>

        <p className="opacity-70 text-center">
          Spend less time on repetitive code patterns and more time on what
          really matters building great software.
        </p>
      </div>

      <div className="xl:mt-10">
        <ContentBox data={data} />
      </div>
    </div>
  );
}

let data = [
  {
    title: "Get customized AI-based recommendations.",
    des: "Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks.",
    link: "/",
    url: BoxImage,
  },
  {
    title: "Help of plugins and source code templates.",
    des: "Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks.",
    link: "/",
    url: CodeImage,
  },
];
