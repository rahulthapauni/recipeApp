import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { FaHeart, FaRegBookmark, FaStar } from 'react-icons/fa'
import { PiChefHatThin } from 'react-icons/pi'

const RecipeCard = ({ flag, food }) => {
   return (
      <div className="flex flex-col relative">
         <div className="image rounded-xl overflow-hidden relative ">
            <img src={food} alt="" className="size-full hover:scale-110 transition duration-300 " />

         </div>
         <div className="absolute w-full flex flex-col p-4 gap-2 ">
            <div className="flex justify-between ">
               <div className="flex items-center bg-white gap-1 rounded-4xl px-2 py-1">
                  <FaStar className="text-yellow-500 text-xl " />
                  <p className="font-semibold text-md ">4.8</p>
               </div>
               <div className="bg-white hover:bg-red-600 text-red-600 hover:text-white  w-9 aspect-square rounded-full relative ">
                  <FaHeart className="  text-xl absolute right-1/2  translate-1/2  " />

               </div>
            </div>

            <div className="bg-white hover:bg-red-600 text-red-600 hover:text-white self-end  w-9 aspect-square rounded-full relative ">
               <FaRegBookmark className="  text-xl absolute right-1/2  translate-1/2  " />

            </div>
         </div>
         <div className="flex flex-col gap-2">
            <h4 className="text-primary font-bold  mt-3 ">Pasta</h4>
            <p className="text-xl font-bold hover:text-primary  transition duration-200">Creamy Garlic Mushroom Penne Pasta</p>
            <div className="flex justify-between gap-4 mt-2 ">
               <div className=" flex gap-1 items-center text-gray-500">
                  <CiClock2 className="text-lg" />
                  <p className="hover:text-primary transition duration-200 hover:cursor-pointer text-md">5 min</p>
               </div>
               <div className="flex gap-1 items-center text-gray-500">
                  <img src={flag} alt="" className="aspect-square h-5" />
                  <p className="hover:text-primary transition duration-200 hover:cursor-pointer text-md">Lebanese</p>
               </div>
               <div className="flex gap-1 items-center text-gray-500">
                  <PiChefHatThin className="text-lg" />
                  <p className="hover:text-primary transition duration-200 hover:cursor-pointer text-md">Beginner</p>
               </div>
            </div>
         </div>


      </div>
   )
}

export default RecipeCard