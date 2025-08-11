import { useNavigate } from "react-router-dom";
import snipr from "../assets/snipr.svg";
import Card from "../components/Card";

const Snipr = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="shadow">
        {/* Navbar */}
        <div className="container flex justify-between items-center py-2">
          <div
            className="flex justify-between items-center gap-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img className="h-14" src={snipr} alt="Snipr Logo" />
            <p className="text-3xl font-medium">Snipr</p>
          </div>

          <button onClick={() => console.log("User Logged Out!")}>
            Logout
          </button>
        </div>
      </div>
      {/* Dashboard */}
      <div className="container text-center">
        {/* Greetings */}
        <p className="text-2xl py-5">
          Hello <span className="text-primary font-medium">Hariharan!</span>{" "}
          Let's make your links snappy.
        </p>
        {/* Input */}
        <div className="flex justify-center items-center gap-1 pb-5">
          <input
            className="border-2 border-primary rounded-4xl py-3 px-5 min-w-96"
            type="text"
            placeholder="Enter URL"
          />
          <button className="bg-primary px-9 py-3 text-white rounded-4xl cursor-pointer text-xl">
            Snip
          </button>
        </div>
      </div>
      <div className="container">
        {/* My Snips */}
        <p className="text-xl font-medium pb-5">My Snips</p>
        <div className="flex justify-between flex-wrap gap-y-7">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Snipr;
