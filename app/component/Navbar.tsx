import imagenew from "../favicon.ico"
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-7  bg-white">
        <span className="flex py-2 items-center">
         <span className="font-bold text-[16px] mr-4">Medium</span>
        <span className="flex gap-2 h-[40px] rounded-[20px] bg-gray-50 items-center">
            <CiSearch className="ml-4 h-[25px] w-[25px] "/>
            <input type='text' className="mr-4 ml-2 bg-gray-50" placeholder="Search"/>
        </span>
        </span>
        <span className="flex py-2 ">
            <span className="flex "><FaRegEdit className="h-[25px] w-[25px] mr-2"/><span className="text-[16px] normal">Write</span></span>
            <IoNotificationsOutline className="h-[25px] w-[25px] ml-8"/>
            <CgProfile className="h-[25px] w-[25px] ml-8"/>
        </span>

    </nav>
  )
}
