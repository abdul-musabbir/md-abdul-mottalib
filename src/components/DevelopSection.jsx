import Frame2 from "../assets/img/frame2.svg";
export default function DevelopSection() {
  return (
    <div className="py-10">
      <div>
        <div>
          <h2 className="text-4xl font-medium">
            Finally you can develop{" "}
            <span className="text-greens">{"{full-stack}"} </span>
            web applications in one place.
          </h2>

          <p className="mt-8 opacity-50">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud ame
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img src={Frame2} alt="code frame" className="w-[10rem]" />
        </div>
      </div>
    </div>
  );
}
