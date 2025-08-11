import logo from "../assets/snipr.svg";
import brandingImg from "../assets/Snipr-user-view.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="container">
        <div className="flex flex-col text-center gap-5 py-7">
          <img className="h-24" src={logo} alt="Snipr Logo" />
          <p className="text-[28px]">
            Snipr: Built to Shorten. Designed to Perform.
          </p>
        </div>
        <div className="px-10">
          <img
            className="border-2 border-primary/60 rounded shadow"
            src={brandingImg}
            alt="User Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
