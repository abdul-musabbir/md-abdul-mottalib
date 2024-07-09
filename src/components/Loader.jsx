import LoadingImage from "../assets/img/loader.gif";
import "../assets/loading.css";
const Loader = () => {
  return (
    <div className="w-full h-screen items-center justify-center animate">
      <img src={LoadingImage} alt="" className="w-52 flex" />
    </div>
  );
};

export default Loader;
