import React from "react";
// import Logo from "../../assets/logo.png";
import { NavbarMenu } from "../mockData/data";
import { CiSearch } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
// import { CiLogin } from "react-icons/ci";
// import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const  [open, setOpen] = React.useState(false);
   return (
      <>
         <nav className="border-b-2 border-red-500 ">
            <div div className="container h-20 p-5 flex justify-between items-center">
               <div className="text-3xl flex items-center gap-2 font-bold py-9 uppercase">
                  <CiGift />
                  <p>Giftfy</p>
               </div>

               <div className="hidden md:block ">
                  <ul className="flex items-center gap-6 text-gray-600">
                     {NavbarMenu.map((item) => {
                        return (
                           <li key={item.id}>
                              <a
                                 href={item.link}
                                 className="initial-block py-1 px-3 hover:text-primary font-semibold"
                              >
                                 {item.title}
                              </a>
                           </li>
                        );
                     })}
                  </ul>
               </div>

               <div className="flex items-center gap-4">
                  <button
                     className="text-2xl hover:bg-primary hover:text-white
                  rounded-full p-2 duration-200"
                  >
                     <CiSearch />
                  </button>
                  <buttoon
                     className="text-2xl hover:bg-primary hover:text-white
                  rounded-full p-2 duration-200"
                  >
                     <CiShoppingCart />
                  </buttoon>
                  <button
                     className="hover:bg-primary text-primary font-semibold hover:text-white
                  rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
                  >
                     Login
                  </button>
               </div>
               <div className="md:hidden " onClick={() => setOpen(!open)}>
                  <MdMenu className="text-4xl" />
               </div>
            </div>  
         </nav>
         <ResponsiveMenu open={open}/>
      </>
   );
};

export default Navbar;
