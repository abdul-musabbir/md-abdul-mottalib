import Frame2 from "../assets/img/frame2.svg";
export default function DevelopSection() {
  return (
    <div className="">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-4xl font-medium xl:text-5xl">
            Finally you can develop{" "}
            <span className="text-greens">{"{full-stack}"} </span>
            web applications in one place.
          </h2>

          <p className="mt-8 opacity-50 lg:text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud ame
          </p>
        </div>

        <div className="flex items-center justify-center mt-10 shadows">
          <img src={Frame2} alt="code frame" className="w-11/12" />
        </div>
      </div>
    </div>
  );
}
