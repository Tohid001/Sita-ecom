import { AiFillHome } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { BiMessageEdit } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";

const bottomNavData = [
  { title: "Home", path: "/Home", icon: <AiFillHome /> },
  { title: "Offer", path: "/offer", icon: <FaGift /> },
  { title: "Contact Us", path: "/Contact us", icon: <BiMessageEdit /> },
  { title: "Help", path: "/help", icon: <BiHelpCircle /> },
  {
    title: "Account",
    path: "/Account",
    subHeader: true,
    icon: <RiContactsFill />,
  },
];

export default { bottomNavData };
