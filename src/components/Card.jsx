import link from "../assets/AiOutlineLink.svg";
import brokenLink from "../assets/FcBrokenLink.svg";
import click from "../assets/GiClick.svg";
import del from "../assets/AiOutlineDelete.svg";
import copy from "../assets/IoCopyOutline.svg";
import { toast } from "react-toastify";

const Card = ({ originalUrl, shortUrl, clicks, handleDelete }) => {
  return (
    <div className="min-w-80">
      <div className="rounded border-2 border-primary/55 p-3 shadow">
        <div className="flex justify-between pb-2">
          <p className="flex gap-1">
            <img className="h-6" src={link} alt="Link Icon" /> Original URL
          </p>
          <button className="p-1 cursor-pointer" onClick={handleDelete}>
            <img className="h-6" src={del} alt="Delete Icon" />
          </button>
        </div>
        <p className="pb-3">{originalUrl}</p>
        <p className="flex gap-1 pb-2">
          <img className="h-6" src={brokenLink} alt="Broken Link Icon" /> Short
          URL
        </p>
        <div className="flex justify-between pb-2">
          <p>{shortUrl}</p>
          <button
            className="p-1 cursor-pointer"
            onClick={() => { navigator.clipboard.writeText(shortUrl); toast.success("Copied to clipboard") }}
          >
            <img className="h-6" src={copy} alt="Copy Icon" />
          </button>
        </div>
        <p className="flex gap-1">
          <img className="h-6" src={click} alt="Click Icon" />: {clicks}
        </p>
      </div>
    </div>
  );
};

export default Card;
