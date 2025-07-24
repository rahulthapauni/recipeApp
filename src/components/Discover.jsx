import React from 'react'
import bgimg from '../assets/hero2.jpg'
import { LiaGlassMartiniAltSolid } from 'react-icons/lia';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Discover = () => {
   return (
      <section
         style={{
            backgroundImage: `url(${bgimg})`,
         }}

         className="wrapper2 h-lvh bg-center bg-cover rounded-2xl flex items-center pl-24" >
         <div className="flex flex-col w-5/10">
            <h2 className="text-5xl/tight  text-black font-bold lh">You don't know how to make the dish you have in mind?</h2>
            <p className="text-lg mt-5 ">Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.</p>
            <form action="" className="mt-14 bg-white flex justify-between px-2 py-2 items-center rounded-xl gap-4">

               <LiaGlassMartiniAltSolid className="text-primary text-5xl ms-2" />
               <input type="text" name="" id="" className="w-full placeholder:text-lg placeholder:text-gray-500 " placeholder='Find what do you want to cook today' />
               <button className=" bg-primary  hover:bg-black hover:cursor-pointer   rounded-xl text-white p-3  "><HiMagnifyingGlass className=" text-3xl" /></button>

            </form>
            <p className="text-md text-gray-500 mt-5">Type a keyword and discover recipes that turn your cravings into delicious reality!</p>
         </div >
      </ section >
   )
}

export default Discover;