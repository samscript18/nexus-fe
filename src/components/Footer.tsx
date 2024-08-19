import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import borderImg from "@/public/Subtract.png";
import { navData } from "../utils/navbar.data";
import Link from "next/link";

const Footer = () => {
  return (
    <nav className="flex lg:flex-row flex-col justify-between items-center lg:py-[20px] lg:px-[45px] md:py-[10px] md:px-[15px] md:border-2 md:border-[#53aab0]">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="flex lg:justify-between justify-center items-center text-white lg:gap-10 md:gap-8 gap-6 py-2 lg:py-0">
          <Link href={`https://www.x.com/N_ext`}>
            <FaTwitter size={20} />
          </Link>
          <FaFacebook size={20} />
          <Link href={`https://www.instagram.com/i_ne_xt`}>
            <FaInstagram size={20} />
          </Link>
          <FaYoutube size={20} />
        </div>
        <ul className="hidden md:flex justify-between items-center lg:ml-6">
          {navData.map((item) => {
            return (
              <li
                className={` py-3 px-6 ${
                  item.id === navData.length ? "" : "md:pr-2"
                }`}
                key={item.id}
              >
                <a href={`#${item.path}`} className="text-white">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-start items-center">
        <p className="text-white text-[2rem] pt-2 pr-2">&copy; </p>
        <p className="text-white lg:text-[1.2rem] md:text-[.95rem] leading-[25px]">
          2024 Next , AllRights Reserved
        </p>
      </div>
    </nav>
  );
};
export default Footer;
