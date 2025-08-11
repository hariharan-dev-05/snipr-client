import link from "../assets/AiOutlineLink.svg";
import brokenLink from "../assets/FcBrokenLink.svg";
import click from "../assets/GiClick.svg";
import del from "../assets/AiOutlineDelete.svg";
import copy from "../assets/IoCopyOutline.svg";

const Card = () => {
  return (
    <div className="min-w-80">
      <div className="rounded border-2 border-primary/55 p-3 shadow">
        <div className="flex justify-between pb-2">
          <p className="flex gap-1">
            <img className="h-6" src={link} alt="Link Icon" /> Original URL
          </p>
          <img className="h-6" src={del} alt="Delete Icon" />
        </div>
        <p className="pb-3">https://www.example.com</p>
        <p className="flex gap-1 pb-2">
          <img className="h-6" src={brokenLink} alt="Broken Link Icon" /> Short
          URL
        </p>
        <div className="flex justify-between pb-2">
          <p>https://www.example.com</p>
          <img className="h-6" src={copy} alt="Delete Icon" />
        </div>
        <p className="flex gap-1">
          <img className="h-6" src={click} alt="Click Icon" />: 15
        </p>
      </div>
    </div>
  );
};

export default Card;
