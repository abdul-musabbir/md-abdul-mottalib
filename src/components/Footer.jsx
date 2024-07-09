import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#12181D] border-b-[6px] border-b-greens">
      <div className="flex mx-auto w-11/12 py-8">
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-10">
            <div className={"flex flex-col gap-5"}>
              <h3 className="text-xl font-bold opacity-90">Company</h3>
              <div className="flex flex-col gap-2">
                <Link to={"/"} className=" opacity-60">
                  how it works
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Features
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Docs
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Blog
                </Link>
                <Link to={"/"} className=" opacity-60">
                  About
                </Link>
              </div>
            </div>

            <div className={"flex flex-col gap-5"}>
              <h3 className="text-xl font-bold opacity-90">Resource</h3>
              <div className="flex flex-col gap-2">
                <Link to={"/"} className=" opacity-60">
                  Docs
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Forum
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Careers
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Templates
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Feedback
                </Link>
              </div>
            </div>

            <div className={"flex flex-col gap-5"}>
              <h3 className="text-xl font-bold opacity-90">Legal</h3>
              <div className="flex flex-col gap-2">
                <Link to={"/"} className=" opacity-60">
                  Terms of Service
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Privacy Policy
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Guidelines
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Fair Use Policy
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Feedback
                </Link>
              </div>
            </div>

            <div className={"flex flex-col gap-5"}>
              <h3 className="text-xl font-bold opacity-90">Support</h3>
              <div className="flex flex-col gap-2">
                <Link to={"/"} className=" opacity-60">
                  FAQs
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Call Center
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Maintance
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Status
                </Link>
              </div>
            </div>

            <div className={"flex flex-col gap-5"}>
              <h3 className="text-xl font-bold opacity-90">Platform</h3>
              <div className="flex flex-col gap-2">
                <Link to={"/"} className=" opacity-60">
                  Team
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Security
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Roadmap
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Features
                </Link>
                <Link to={"/"} className=" opacity-60">
                  Enterprise
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 mx-auto flex">
            <p className=" opacity-60">
              2024 All Rights Reserved &copy; Circle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
