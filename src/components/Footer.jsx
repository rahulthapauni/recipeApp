import React from 'react'
import { FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from "../assets/BrandLogoPlatea.svg";

const Footer = () => {


   const iconStyle = "hover:cursor-pointer bg-neutral-300  aspect-square px-4 flex text-sm hover:bg-black transition duration-300 hover:text-white items-center rounded-full"
   return (
      <section className="wrapper">
         <div className="flex items-center justify-center py-10 gap-10">
            <ul className="flex items-center gap-2">
               <li className={iconStyle}><FaInstagram /></li>
               <li className={iconStyle}><FaXTwitter /></li>
               <li className={iconStyle}><FaYoutube /></li>
               <li className={iconStyle}><FaPinterestP /></li>
            </ul>

            <ul className="flex items-center gap-10">
               <li className="font-bold p-1 hover:text-primary transition duration-100">All Recipes</li>
               <li className="font-bold p-1 hover:text-primary transition duration-100">Video Recipes</li>
               <li className="font-bold p-1 hover:text-primary transition duration-100">A-Z Recipes</li>
               <li className="font-bold p-1 hover:text-primary transition duration-100">Refund Policy</li>
               <li className="font-bold p-1 hover:text-primary transition duration-100">Terms and Conditions</li>
               <li className="font-bold p-1 hover:text-primary transition duration-100">Contact Us</li>
            </ul>
         </div>
         <div className="border-t-1 border-neutral-300 py-10 justify-center flex  gap-4 flex-col items-center ">
            <p className="text-neutral-400">Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.</p>
            <p className=""> &copy; 2025 Platea. All rights reserved. Designed by Gloria Themes.</p>
            <img src={logo} alt="" className="h-7 hover:cursor-pointer" />

         </div>

      </section>
   )
}

export default Footer