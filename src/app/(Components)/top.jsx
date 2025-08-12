import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import logo from "../../../public/logo.webp";
const Top = () => {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 p-4 bg-surface text-white">
        <div className="logo">
          <a href="/">
            <Image src={logo} className="h-8 w-auto" alt="logo" />
          </a>
        </div>
        <div className="search ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <div className="login">
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full">
              <FaRegUser className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
