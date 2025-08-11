import { useNavigate } from "react-router-dom";
import snipr from "../assets/snipr.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow">
      <div className="container flex justify-between items-center py-2">
        <div className="flex justify-between items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
          <img className="h-14" src={snipr} alt="Snipr Logo" />
          <p className="text-3xl font-medium">Snipr</p>
        </div>

        <button
          className="bg-primary px-6 py-3 text-white rounded-4xl cursor-pointer"
          onClick={() => navigate("/auth")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
