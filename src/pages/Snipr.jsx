import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import snipr from "../assets/snipr.svg";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { createUrl, deleteUrl, getUrls } from '../api'
import { toast } from "react-toastify";

const Snipr = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const { userName, setIsAuthenticated, setuserName } = useAuth();

  const fetchUrls = async () => {
    const { data } = await getUrls();
    setUrls(data.urls);
  };

  const handleSnip = async () => {
    if (url.trim() === "") return;
    const res = await createUrl(url);
    if (res.status === 201) {
      setUrl("");
      fetchUrls();
      toast.success("Snip created successfully");
    }
  }

  const handleDeleteSnip = async (id) => {
    if (!id) return;
    const response = await deleteUrl(id);
    if (response.status === 200) {
      fetchUrls();
      toast.success("Snip deleted successfully");
    }
  }

  useEffect(() => {
    fetchUrls();
  }, []);

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

          <button
            className="bg-primary hover:scale-105 outline-none cursor-pointer text-white px-4 py-2 rounded-full transition"
            onClick={() => {
              localStorage.removeItem("token");
              setIsAuthenticated(false);
              setuserName("");
              navigate("/");
              toast.success("Logged out successfully");
            }}>
            Logout
          </button>
        </div>
      </div>
      {/* Dashboard */}
      <div className="container text-center">
        {/* Greetings */}
        <p className="text-2xl py-5">
          Hello <span className="text-primary font-medium">{userName}!</span>{" "}
          Let's make your links snappy.
        </p>
        {/* Input */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-1 pb-5">
          <input
            className="border-2 border-primary rounded-4xl py-3 px-5 w-full sm:w-80"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter URL"
          />
          <button
            onClick={handleSnip}
            className="bg-primary px-9 py-3 text-white rounded-4xl cursor-pointer text-xl w-full sm:w-fit">
            Snip
          </button>
        </div>
      </div>
      <div className="container">
        {/* My Snips */}
        <p className="text-xl font-medium pb-5">My Snips</p>
        {urls.length === 0 ? (
          <p className="text-lg text-gray-500 text-center">No Snips created yet!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
            {urls.map((url) =>
              <Card
                key={url._id}
                originalUrl={url.originalUrl}
                shortUrl={url.fullShortUrl}
                clicks={url.clicks}
                handleDelete={() => handleDeleteSnip(url._id)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Snipr;
