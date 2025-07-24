import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { FaHeart, FaPlay, FaRegBookmark, FaStar } from 'react-icons/fa'
import { PiChefHatThin } from 'react-icons/pi'

const VideoCard = ({ flag, food }) => {
   return (
      <div className="flex flex-col relative group">
         <div className="image rounded-xl overflow-hidden relative -z-30   ">
            <img src={food} alt="" className=" size-full group-hover:scale-110 transition duration-300 " />

         </div>
         <div className="absolute items-center flex flex-col p-4 gap-2  size-full">
            <div className="flex justify-between w-full">
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
            {/*   <div className="absolute top-1/3 -z-20   flex justify-center items-center p-8 -translate-y-1/3 -translate-x-4/9  left-1/2 ">
               <span className="relative before:contents-[''] before:w-23 before:rounded-full  before:opacity-60 before:aspect-square before:bg-neutral-300 before:-left-[110%] before:-bottom-[101%] before:absolute  "><FaPlay className="text-3xl relative z-50" />
               </span>

            </div> */}
            <div className="absolute top-1/3 -z-20 flex justify-center items-center p-8 -translate-y-1/3 -translate-x-4/9 left-1/2
  w-[92px] h-[92px] rounded-full bg-white/20 backdrop-blur-md border border-white/30
               transition-transform duration-300 group-hover:scale-120
  ">
               <FaPlay className="text-3xl relative z-50 text-white group-hover:scale-80 transition-transform duration-300 " />
            </div>






         </div>
         <div className="flex flex-col gap-2 z-50">
            <h4 className="text-primary font-bold  mt-3 ">Pasta</h4>
            <p className="text-xl font-bold text-black hover:text-primary hover:underline hover:cursor-pointer transition duration-300">Creamy Garlic Mushroom Penne Pasta</p>
            <div className="flex justify-between gap-4 mt-2 ">
               <div className=" flex gap-1 items-center text-gray-500">
                  <CiClock2 className="text-lg" />
                  <p className="hover:text-primary hover:underline  transition duration-300 hover:cursor-pointer text-md">5 min</p>
               </div>
               <div className="flex gap-1 items-center text-gray-500">
                  <img src={flag} alt="" className="aspect-square h-5" />
                  <p className="hover:text-primary hover:underline  transition duration-300 hover:cursor-pointer text-md">Lebanese</p>
               </div>
               <div className="flex gap-1 items-center text-gray-500">
                  <PiChefHatThin className="text-lg" />
                  <p className="hover:text-primary hover:underline  transition duration-300 hover:cursor-pointer text-md">Beginner</p>
               </div>
            </div>
         </div>


      </div>
   )
}

export default VideoCard