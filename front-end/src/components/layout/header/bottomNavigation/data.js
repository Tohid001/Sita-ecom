import { AiFillHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMessageEdit } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";

export const data = [
  { title: "Home", path: "/Home", icon: <AiFillHome /> },
  { title: "About Us", path: "/About us", icon: <AiOutlineInfoCircle /> },
  { title: "Contact Us", path: "/Contact us", icon: <BiMessageEdit /> },
  {
    title: "Account",
    path: "/Account",
    subHeader: true,
    icon: <RiContactsFill />,
  },
];
