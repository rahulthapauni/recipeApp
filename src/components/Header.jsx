
import hamburger from '../assets/ui-icons/hamburgerMenu.svg'
import { FaPinterestP, FaInstagram, FaYoutube, FaRegBookmark, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiUser } from 'react-icons/fi';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import BrandLogo from '../assets/BrandLogoPlatea.svg'
import { RxCaretDown } from 'react-icons/rx';
import Button1 from '../utilities/Button1';


import ModalAuth from '../components/ModalAuth';
import Auth2 from "../pages/Auth2"
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

// icons


const Header = () => {


   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
   const openAuthModal = () => {
      setIsAuthModalOpen(true);
   }
   const closeAuthModal = () => {
      setIsAuthModalOpen(false);
   }
   return (
      <header>
         {/* top div */}
         <div className="wrapper border-b-1   text-sm flex py-4 border-b-gray-300 justify-between items-center">
            {/* left div */}
            <div className="flex justify-between gap-12 items-center relative">
               <div className="flex justify-between items-center gap-2 after:content=''  after:absolute after:w-0.5 after:h-full after:left-1/3 after:bg-gray-300">
                  <img src={hamburger} alt="hamburger" className="me-1" />
                  <p className="text-neutral-500">Recipe Categories</p>
                  <p className="border border-gray-300 rounded-3xl px-3 py-1 text-[12px]">1.0K</p>
               </div>

               <div className="flex justify-between relative items-center ">
                  <ul className="flex text-gray-400  justify-between items-center gap-5">
                     <li className="hover:text-primary hover:cursor-pointer">Video Recipes</li>
                     <li className="hover:text-primary hover:cursor-pointer">A-Z Recipes</li>
                     <li className="hover:text-primary hover:cursor-pointer">This Week's Recipes</li>
                     <li className="hover:text-primary hover:cursor-pointer">Contact Us </li>
                  </ul>
               </div>
            </div>
            {/* right div */}
            <div className="flex justify-between items-center">
               <ul className="flex justify-between items-center text-lg gap-6">
                  <li className="hover:cursor-pointer"><FaInstagram /></li>
                  <li className="hover:cursor-pointer"><FaXTwitter /></li>
                  <li className="hover:cursor-pointer"><FaYoutube /></li>
                  <li className="hover:cursor-pointer"><FaPinterestP /></li>
               </ul>

            </div>
         </div>

         {/* main nav */}
         <nav className="wrapper py-6 flex justify-between items-center">

            <div className="left flex justify-between items-center gap-4">
               <div className="image hover:cursor-pointer">

                  <NavLink to={'/'}>
                     <img src={BrandLogo} alt="" className="h-3/4 w-auto" />
                  </NavLink>
               </div>
               <ul className=" flex justify-between items-center gap-4 text-lg font-semibold">
                  <NavLink to={'/'}>

                     <li className=" hover:cursor-pointer px-3 py-2 rounded-4xl flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 transition duration-200">Home <RxCaretDown className="text-2xl" /></li>
                  </NavLink>
                  <NavLink to={'/allRecipes'}>

                     <li className=" hover:cursor-pointer px-3 py-2 rounded-4xl flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 transition duration-200">Recipes <RxCaretDown className="text-2xl" /></li>

                  </NavLink>
                  <NavLink to={'/'}>


                     <li className=" hover:cursor-pointer px-3 py-2 rounded-4xl flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 transition duration-200">Cuisines<RxCaretDown className="text-2xl" /></li>
                  </NavLink>
                  <NavLink to={'/'}>

                     <li className=" hover:cursor-pointer px-3 py-2 rounded-4xl flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 transition duration-200">Categories <RxCaretDown className="text-2xl" /></li>

                  </NavLink>
                  <NavLink to={'/'}>

                     <li className=" hover:cursor-pointer px-3 py-2 rounded-4xl flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 transition duration-200">Blog <RxCaretDown className="text-2xl" /></li>

                  </NavLink>
                  <NavLink to={'/'}>

                     <li className=" hover:cursor-pointer px-3 py-2 rounded-4xl flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 transition duration-200">Features <RxCaretDown className="text-2xl" /></li>

                  </NavLink>





               </ul>

            </div>
            <div className="right flex items-center text-xl gap-6">
               <FaRegBookmark className='hover:cursor-pointer ' />
               <button className=""
                  onClick={openAuthModal}

               > <FiUser className='hover:cursor-pointer hover:text-primary transition duration-300 ' /></button>
               <HiMagnifyingGlass className='hover:cursor-pointer ' />



               <NavLink to={'/'}>


                  <Button1 content={"Add Recipe"} />
               </NavLink>
            </div>
            {/* modal */}
            <ModalAuth isOpen={isAuthModalOpen} onClose={closeAuthModal}>

               <Auth2 />



            </ModalAuth>
         </nav>


      </header>
   )
}

export default Header