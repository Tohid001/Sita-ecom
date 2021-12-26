import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMessageEdit } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";

export const data = [
  { title: "About Us", path: "/About us", icon: <AiOutlineInfoCircle /> },
  { title: "Contact Us", path: "/Contact us", icon: <BiMessageEdit /> },
  {
    title: "Account",
    path: "/Account",
    subHeader: true,
    icon: <RiContactsFill />,
  },
];
