import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ResponsiveMenu = ({ open }) => {
   return (
      <AnimatePresence mode="wait">
         {open && (
            <motion.div
               initial={{ opacity: 0, y: -100 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -100 }}
               transition={{ duration: 0.3 }}
               className="absolute top-20 left-0 w-full h-screen z-20 "
            >
               <div className="text-2xl font-semibold uppercase bg-gray-500 text-white  border py-10 m-6 rounded-3xl">
                  <ul className="flex flex-col justify-center items-center gap-10">
                     <li>Home</li>
                     <li>About</li>
                     <li>Blogs</li>
                     <li>Contact</li>
                  </ul>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ResponsiveMenu;
